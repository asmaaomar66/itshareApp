import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[CustomDirectives]'
})
export class CustomDirectivesDirective {

  @Input('format') format: any;

  constructor(private ref: ElementRef) { }

  @HostListener('focus') onFocus(){

    window.alert('Focus');
  }

  @HostListener('blur') onBlur(){

    const getValue: string = this.ref.nativeElement.value;
    if (this.format === 'toUpperCase'){

      this.ref.nativeElement.value = getValue.toUpperCase();

    }else if (this.format === 'toLowerCase'){

      this.ref.nativeElement.value = getValue.toLowerCase();
    }else{
      this.ref.nativeElement.value = getValue.toLowerCase();
    }

  }

}
