import { Directive,Input,ElementRef, Renderer,HostBinding} from '@angular/core';

@Directive({
  selector: '[Myvisibility]'
})
export class MyvisibilityDirective {

  constructor( private e:ElementRef, private r:Renderer) { 
   // console.log(this.visible);
   // r.setElementStyle(e.nativeElement,'visible',this.visible);
  }
@HostBinding('style.visibility') locVisible;
@Input('visible') visible:boolean;
ngOnInit(){
     if(this.visible==false){
         this.locVisible="hidden";
     }
     else{
       this.locVisible="visible";
     }
}
}
