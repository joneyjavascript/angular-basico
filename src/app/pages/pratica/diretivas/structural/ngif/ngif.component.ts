import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {

  loading: boolean;
  idade = 18;

  constructor() { 
    this.carregarDados();
  }

  carregarDados(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000)
  }

}
