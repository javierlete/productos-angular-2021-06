import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  producto: Producto = { id: 0, nombre: '', precio: 0 };

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.productoService.obtenerProductoPorId(id).subscribe(
        productoRecibido => this.producto = productoRecibido
      )
    }
  }
}
