import { OnInit, Directive, HostListener, HostBinding, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[inputNumberQtd]'
})
export class InputNumberQtdDirective {

  @Input() maxLength: number;
  @Input() pattern: any;

  @HostBinding('style.backgroundColor') backgroundColor: string
  @HostBinding('style.color') color: string

  @HostListener('keyup', ['$event']) onkeyup(dom: any){
    const valueNow = dom.target.value
    this.pattern = new RegExp(this.pattern,'g');
    const isValid = this.pattern.test(valueNow);

    if(valueNow.length <= this.maxLength){
      if(isValid){
        this.backgroundColor = 'red';
      }else{
        this.backgroundColor = 'white';
      }
    }else{
      dom.target.value = valueNow.substring(0,6);
    }
  }

  constructor(
    private _elementRef: ElementRef
  ) { }


  ngOnInit(): void {
  }

}
