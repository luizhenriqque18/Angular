import { Directive, HostListener, HostBinding   , Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

@HostBinding('style.backgroundColor') backgroundColor: string;
@HostBinding('style.transition') transition: string;
@HostBinding('style.color') color: string;

@HostListener('mouseenter') onmouseover(){
  this.backgroundColor = 'red';
  this.transition = '1s'
  this.color = 'white'
  // this._renderer.setElementStyle(
  //   this._elementRef.nativeElement,
  //   'background-color',
  //   'red'
  // )
}

@HostListener('mouseleave') onmouseleave(){
  this.backgroundColor = 'white';
  this.color = 'black'
  // this._renderer.setElementStyle(
  //   this._elementRef.nativeElement,
  //   'background-color',
  //   'white'
  // )
  // this._renderer.setElementStyle(
  //   this._elementRef.nativeElement,
  //   'transition',
  //   '1s'
  // )
}



  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer ) { }

}
