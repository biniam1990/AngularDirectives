import { Directive,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[Mycolor]'
})
export class MycolorDirective {

  constructor() { }
  
  colors:string[]=['blue','green','yellow','orange','red'];
  
  @HostBinding('style.color') color;
  @HostListener('click') changeColor(){
         this.color=this.colors[Math.floor(Math.random()*5)];
  }
}
