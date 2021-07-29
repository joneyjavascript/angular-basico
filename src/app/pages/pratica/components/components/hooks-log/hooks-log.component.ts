import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks-log',
  templateUrl: './hooks-log.component.html',
  styleUrls: ['./hooks-log.component.css']
})
export class HooksLogComponent implements 
                                  OnInit, 
                                  OnChanges, 
                                  DoCheck, 
                                  AfterContentInit, 
                                  AfterContentChecked, 
                                  AfterViewInit, 
                                  AfterViewChecked,
                                  OnDestroy {

  hookList: HookData[] = [];
  @Input("data") dadoVinculado ="";

  constructor(private changeDetector: ChangeDetectorRef) { 

  }

  ngOnInit(): void {
      this.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges){
    this.log("ngOnChanges, changes ==> " + JSON.stringify(changes));
  }

  ngDoCheck(){
    this.log("ngDoCheck");
  }

  ngAfterContentInit(){
    this.log("ngAfterContentInit");
  }

  ngAfterContentChecked(){
    this.log("ngAfterContentChecked");
  }

  ngAfterViewInit(){
    this.log("ngAfterViewInit");
  }

  ngAfterViewChecked(){
    this.log("ngAfterViewChecked");

    // forçar a detecção de alterações no component/template
    this.changeDetector.detectChanges(); // precisa disso pra forçar a verifacação de alterações, já que esse é o último evento a ser executado
  }

  ngOnDestroy(){
    this.log("ngOnDestroy");
  }

  log(text: string){
    const logText = this.timestamp() + " - lifecycle hook log: " + text;
    console.log(logText);
    this.hookList.push({
      description: logText
    });
  }

  leftPad(value:any, size:number=2, char:string="0") {
    return value.toString().padStart(size, char);
  }

  timestamp(){
    const date = new Date();
    return this.leftPad(date.getDate()) + "/" + this.leftPad((date.getMonth() + 1) + " " + this.leftPad(date.getHours()) + ":" + this.leftPad(date.getMinutes()) + ":" + this.leftPad(date.getSeconds()));
  }

}

interface HookData {
  description: string;
}