import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imagenwidth:number=50;
  imagenMarge:number=2;
  muestraImg:boolean=false;
  listFilter:string='';

  constructor() { }
  muestraImagen():void{
    this.muestraImg=!this.muestraImg;
  }
  products:Producto[]=[
    {
      "product1":1,
      "productName":'Doberman',
      "descripcion":'Perro de raza grande',
      "createDate":"Septiembre 22,2022",
      "listFilter":'',
      "price":5000,
      "rating":3.6,
      "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcgifdCFWA3bvehr_O8OPXAicYb35wflFZQ&usqp=CAU"
    },
  ]
  ngOnInit(): void {
  }

}
