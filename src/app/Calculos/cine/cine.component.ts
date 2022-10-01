import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {

  CompradorName:boolean;
  CantComprador:number;
  CantidadBoletos;
  TotalPagar:number;

  constructor() { }

  ngOnInit(): void {
  }

  MasCincoBoletos():void {
    this.TotalPagar= parseInt(this.CantidadBoletos)
  }

  MenosCincoBoletos():void {
    this.TotalPagar= parseInt(this.CantidadBoletos)
  }

  UnoDosBoletos():void {
    this.TotalPagar= parseInt(this.CantidadBoletos)
  }
}
