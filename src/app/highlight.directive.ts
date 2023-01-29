import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

enum HighlightColor {
  Red = 'red',
  DarkRed = '#880000',
  Green = 'green',
  DarkGreen = '#006400',
  Blue = 'blue',
  DarkBlue = '#0000CD',
}

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() status: 'deleted' | 'active' | 'inactive' = 'deleted';

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement;
  }

  @HostListener('click')
  changeColorToYellor() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit() {
    console.log(this.status);
    switch (this.status) {
      case 'deleted':
        this.elementRef.nativeElement.style.backgroundColor =
          HighlightColor.Red;
        this.elementRef.nativeElement.querySelector(
          'button'
        ).style.backgroundColor = HighlightColor.DarkRed;
        break;
      case 'active':
        this.elementRef.nativeElement.style.backgroundColor =
          HighlightColor.Green;
        this.elementRef.nativeElement.querySelector(
          'button'
        ).style.backgroundColor = HighlightColor.DarkGreen;
        break;
      case 'inactive':
        this.elementRef.nativeElement.style.backgroundColor =
          HighlightColor.Blue;
        this.elementRef.nativeElement.querySelector(
          'button'
        ).style.backgroundColor = HighlightColor.DarkBlue;
        break;
    }
  }
}
