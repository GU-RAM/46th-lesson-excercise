import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[bgColorChange]',
})
export class bgColorChangeDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement;
  }

  @HostListener('mouseover')
  changeBgColorToRed() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  ngOnInit(): void {}
}
