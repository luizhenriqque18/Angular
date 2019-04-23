import { OnInit, Directive, Input, HostBinding, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  constructor() { }

  @Input() backgroudColorDefault: string;
  @Input() backgroudColorHouver: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onmouseover(){
    this.backgroundColor = this.getRandomColor();

  }

  @HostListener('mouseleave') onmouseleave(){
    this.backgroundColor = this.backgroudColorDefault;
  }

  ngOnInit(){
    this.backgroundColor = this.backgroudColorDefault;
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
