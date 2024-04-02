import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, ViewChild, PLATFORM_ID, HostListener } from '@angular/core';
import { debounceTime, fromEvent, Observable, Subscription } from "rxjs";
import { NgIf, isPlatformBrowser } from '@angular/common';
import BackgroundAnimation from './animation';

@Component({
  selector: 'app-animated-background',
  standalone: true,
  imports: [NgIf],
  templateUrl: './animated-background.component.html',
  styleUrl: './animated-background.component.scss'
})
export class AnimatedBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('animated_background', { static: false })
  private canvas!: ElementRef<HTMLCanvasElement>;

  private resizeSubscription!: Subscription
  private mouseMoveSubscription!: Subscription

  private backgroundAnimation?: BackgroundAnimation;

  constructor (@Inject(PLATFORM_ID) private platformId: string) {}

  get isBrowserOnly(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowserOnly)
      return;

    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
    
    this.backgroundAnimation = new BackgroundAnimation(this.canvas.nativeElement.getContext('webgl')!, window.innerWidth, window.innerHeight);

    this.resizeSubscription = fromEvent(window, 'resize').pipe(debounceTime(1000)).subscribe(e => {
      if (this.backgroundAnimation) {
        const eventTarget = e.target! as any;
        const width = eventTarget.innerWidth;
        const height = eventTarget.innerHeight;
        this.backgroundAnimation.updateWindowSize(width, height);
        this.canvas.nativeElement.width = width;
        this.canvas.nativeElement.height = height;
      }
    });

    this.mouseMoveSubscription = fromEvent(window, 'mousemove').subscribe(e => {
      if (this.backgroundAnimation) {
        const event = e as any;
        const x = event.pageX;
        const y = event.pageY;
        this.backgroundAnimation.updateMousePos(x, y);
      }
    });
  }

  ngOnDestroy(): void {
    if (!this.isBrowserOnly)
      return;
    this.backgroundAnimation?.finalize();
    this.backgroundAnimation = undefined;
    this.resizeSubscription.unsubscribe();
  }
}
