import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[automaticDigits]'
})
export class AutomaticDigitsDirective implements OnInit{

  @Input() charPerSecond: number = 40;

  textoArr = [];
  parcialText = "";
  interval: any = null;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(){
    this.textoArr = this.el.nativeElement.innerText.split("");
    this.updateText("");
    this.interval = setInterval(() => {
      this.parcialText += this.textoArr.shift();

      if(this.textoArr.length === 0) {
        clearInterval(this.interval);
      }

      this.updateText(this.parcialText);
    }, 1000 / this.charPerSecond);
  } 

  updateText(text:string){
    this.el.nativeElement.innerText = text;
  }
}
