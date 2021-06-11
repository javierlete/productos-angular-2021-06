import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  productos: Producto[] = [
    { id: 1, nombre: 'Ratón', precio: 12.34 },
    { id: 2, nombre: 'Monitor', precio: 123.45 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
