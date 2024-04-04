import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiPipe'
})
export class EmojiPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const temp = document.createElement('div')
    temp.innerHTML = '&#128540'
    return value + temp.innerHTML;
  }
}
