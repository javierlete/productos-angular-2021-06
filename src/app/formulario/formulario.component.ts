import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../categoria';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  producto: Producto = { id: 0, nombre: '', precio: 0, categoria: {nombre: 'Hardware', id: 1} };
  categorias: Categoria[] = [];

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.productoService.obtenerProductoPorId(id).subscribe(
        productoRecibido => this.producto = productoRecibido
      );
    }

    this.productoService.obtenerCategorias().subscribe(
      categoriasRecibidas => this.categorias = categoriasRecibidas
    );
  }

  aceptar():void {
    if(this.producto.id) {
      this.productoService.modificar(this.producto).subscribe();
    } else {
      const producto: any = this.producto; //{ nombre: this.producto.nombre, precio: this.producto.precio} as Producto
      delete producto.id;

      this.productoService.insertar(producto as Producto).subscribe();
    }

    this.location.back();
  }
}
