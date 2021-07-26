import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent  {

  tarefa1Concluida = true;
  tarefa2Concluida = false;

  classTarefa1 = {
    "tarefa-concluida": false,
    "tarefa-prioritaria": true
  }

  classTarefa2 = {
    "tarefa-concluida": true,
    "tarefa-prioritaria": false
  }

  nome = "";
  nomeControl = new FormControl("", []);
}
