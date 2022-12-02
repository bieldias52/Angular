import {Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appBetterDirective]'
})

export class BetterHighlightDirective implements OnInit {

  @Input()  defaultBackground = '';
  @Input()  defaultHigh = '';

  @HostBinding('style.backgroundColor') corDoFundo: string;
  @HostBinding('style.color') cor = 'black';

  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) {
  }

  ngOnInit() {
    this.corDoFundo = this.defaultBackground;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }


  @HostListener('mouseenter') mouseouver(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.corDoFundo = this.defaultHigh;
    this.cor = 'white';
  }
  @HostListener('click') asdasdas(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.corDoFundo = 'red';
    // this.cor = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // @ts-ignore
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    this.corDoFundo = this.defaultBackground;
    this.cor = 'black';
  }
}
