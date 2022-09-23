import { Component } from "@angular/core";
@Component({
  selector: 'app.suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma,componet.css']
})

export class SumaComponent {
  total:number=0;
  total1:number=0;
  total2:number=0;
  numero1;
  numero2;
  numero3;

  constructor(){}
  
  sumar(){
    this.total= parseInt(this.numero1) + parseInt(this.numero2) + parseInt(this.numero3);
  }

  restar(){
    this.total= parseInt(this.numero1) - parseInt(this.numero2) - parseInt(this.numero3);
  }

  multiplicar(){
    this.total= parseInt(this.numero1) * parseInt(this.numero2) * parseInt(this.numero3);
  }
}