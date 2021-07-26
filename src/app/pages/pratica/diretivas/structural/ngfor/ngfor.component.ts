import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  listaNomes = [
    "João",
    "Maria",
    "Fernando", 
    "Elisa",
    "Rogério",
    "Pedro"
  ]

  listaItens = [
    { nome: "Teclado", quantidade: 7 },
    { nome: "Mouse", quantidade: 12 },
    { nome: "Monitor", quantidade: 4 },
    { nome: "Notebook", quantidade: 6 },
    { nome: "Cadeira de escritório", quantidade: 6 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
