import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.pedirProductos();
  }

  private pedirProductos() {
    this.productoService.obtenerProductos().subscribe(
      productosRecibidos => this.productos = productosRecibidos
    );
  }

  borrar(id: number): void {
    if (confirm(`¿Estás seguro de que quieres borrar el id ${id}?`)) {
      this.productoService.borrarProducto(id).subscribe(
        //this.pedirProductos.bind(this)
        //_ => this.pedirProductos()
        () => this.pedirProductos()
      );
    }
  }
}
