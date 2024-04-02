import internal from "stream";

interface Vector2 {
  x: number,
  y: number
}

interface Metaball {
  x: number,
  y: number,
  velX: number,
  velY: number,
  radius: number
}

export default class BackgroundAnimation {
  private numMetaballs = 30;
  private metaballs: Array<Metaball> = [];
  private mouse: Vector2 = {x: 0, y: 0};

  private context;
  private height;
  private width;

  private nextFrameHandle?: number;
  private metaballsHandle: any;

  constructor(webglContext: WebGLRenderingContext, width: number, height: number) {
    this.context = webglContext;
    this.width = width;
    this.height = height;
    this.prepareAnimation();
    this.render();
  }

  finalize() {
    if (this.nextFrameHandle) {
      cancelAnimationFrame(this.nextFrameHandle);
    }
  }

  updateMousePos(x: number, y: number) {
    this.mouse.x = x;
    this.mouse.y = y;
  }

  updateWindowSize(width: number, height: number) {
    this.finalize();
    this.width = width;
    this.height = height;
    this.metaballs = [];
    this.metaballsHandle = null;
    this.prepareAnimation();
    this.render();
  }

  render() {
    for (let i = 0; i < this.numMetaballs; i++) {
      let metaball = this.metaballs[i];
      metaball.x += metaball.velX;
      metaball.y += metaball.velY;
  
      if (metaball.x < metaball.radius || metaball.x > this.width - metaball.radius) metaball.velX *= -1;
      if (metaball.y < metaball.radius || metaball.y > this.height - metaball.radius) metaball.velY *= -1;

      const maxDistance = 50;
      const distanceX = Math.min(maxDistance, Math.abs(metaball.x - this.mouse.x));
      const distanceY = Math.min(maxDistance, Math.abs(metaball.y - this.mouse.y));

      metaball.velX += (maxDistance - distanceX) * Math.sign(metaball.x - this.mouse.x) * 0.001;
      metaball.velY += (maxDistance - distanceY) * Math.sign(metaball.y - this.mouse.y) * 0.001;

      const maxSpeed = 2.0;
      
      if (Math.abs(metaball.velX) > maxSpeed * 0.7)
        metaball.velX -= 0.05 * Math.sign(metaball.velX)

      if (Math.abs(metaball.velY) > maxSpeed * 0.7)
        metaball.velY -= 0.05 * Math.sign(metaball.velY)

      metaball.velX = Math.min(maxSpeed, Math.abs(metaball.velX)) * Math.sign(metaball.velX)
      metaball.velY = Math.min(maxSpeed, Math.abs(metaball.velY)) * Math.sign(metaball.velY)
    }
  
    let dataToSendToGPU = new Float32Array(3 * this.numMetaballs);
    for (let i = 0; i < this.numMetaballs; i++) {
      let baseIndex = 3 * i;
      let mb = this.metaballs[i];
      dataToSendToGPU[baseIndex + 0] = mb.x;
      dataToSendToGPU[baseIndex + 1] = mb.y;
      dataToSendToGPU[baseIndex + 2] = mb.radius;
    }
    this.context.uniform3fv(this.metaballsHandle, dataToSendToGPU);
    
    //Draw
    this.context.drawArrays(this.context.TRIANGLE_STRIP, 0, 4);
  
    this.nextFrameHandle = requestAnimationFrame(this.render.bind(this));
  }

  private prepareAnimation() {
    const widthLvl = this.width / 480;
    const heightLvl = this.height / 480;

    for (let i = 0; i < this.numMetaballs; i++) {
      let radius = Math.random() * (widthLvl * heightLvl * 8) + 10;
      this.metaballs.push({
          x: Math.random() * (this.width - 2 * radius) + radius,
          y: Math.random() * (this.height - 2 * radius) + radius,
          velX: (Math.random() - 0.5) * widthLvl,
          velY: (Math.random() - 0.5) * heightLvl,
          radius: radius * 0.75
      });
    }

    let vertexShaderSrc = `
attribute vec2 position;

void main() {
  // position specifies only x and y.
  // We set z to be 0.0, and w to be 1.0
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

    let fragmentShaderSrc = `
precision highp float;

const float WIDTH = ` + (this.width >> 0) + `.0;
const float HEIGHT = ` + (this.height >> 0) + `.0;

uniform vec3 metaballs[` + this.numMetaballs + `];

void main(){
  float x = gl_FragCoord.x;
  float y = gl_FragCoord.y;

  float sum = 0.0;
  for (int i = 0; i < ` + this.numMetaballs + `; i++) {
    vec3 metaball = metaballs[i];
    float dx = metaball.x - x;
    float dy = metaball.y - y;
    float radius = metaball.z;

    sum += (radius * radius) / (dx * dx + dy * dy);
  }

  if (sum >= 0.99) {
    gl_FragColor = vec4(mix(vec3(x / WIDTH, y / HEIGHT, 1.0), vec3(0, 0, 0), max(0.0, 1.0 - (sum - 0.99) * 100.0)), 1.0);
    return;
  }

  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
}

`;

    let vertexShader = this.compileShader(vertexShaderSrc, this.context.VERTEX_SHADER);
    let fragmentShader = this.compileShader(fragmentShaderSrc, this.context.FRAGMENT_SHADER);

    let program = this.context.createProgram()!;
    this.context.attachShader(program, vertexShader);
    this.context.attachShader(program, fragmentShader);
    this.context.linkProgram(program);
    this.context.useProgram(program);

    let vertexData = new Float32Array([
      -1.0,  1.0, // top left
      -1.0, -1.0, // bottom left
      1.0,  1.0, // top right
      1.0, -1.0, // bottom right
    ]);
    let vertexDataBuffer = this.context.createBuffer();
    this.context.bindBuffer(this.context.ARRAY_BUFFER, vertexDataBuffer);
    this.context.bufferData(this.context.ARRAY_BUFFER, vertexData, this.context.STATIC_DRAW);

    let positionHandle = this.getAttribLocation(program, 'position');
    this.context.enableVertexAttribArray(positionHandle);
    this.context.vertexAttribPointer(positionHandle,
      2, // position is a vec2
      this.context.FLOAT, // each component is a float
      false, // don't normalize values
      2 * 4, // two 4 byte float components per vertex
      0 // offset into each span of vertex data
    );

    this.metaballsHandle = this.getUniformLocation(program, 'metaballs');
  }

  private compileShader(shaderSource: string, shaderType: number) {
    let shader = this.context.createShader(shaderType)!;
    this.context.shaderSource(shader, shaderSource);
    this.context.compileShader(shader);
  
    if (!this.context.getShaderParameter(shader, this.context.COMPILE_STATUS)) {
      throw "Shader compile failed with: " + this.context.getShaderInfoLog(shader);
    }
  
    return shader;
  }
  
  private getUniformLocation(program: WebGLProgram, name: string) {
    let uniformLocation = this.context.getUniformLocation(program, name);
    if (uniformLocation == -1) {
      throw 'Can not find uniform ' + name + '.';
    }
    return uniformLocation;
  }
  
  private getAttribLocation(program: WebGLProgram, name: string) {
    let attributeLocation = this.context.getAttribLocation(program, name);
    if (attributeLocation == -1) {
      throw 'Can not find attribute ' + name + '.';
    }
    return attributeLocation;
  }
}