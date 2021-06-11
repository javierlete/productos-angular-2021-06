import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: Producto[] = [
    { id: 1, nombre: 'Ratón', precio: 12.34 },
    { id: 2, nombre: 'Monitor', precio: 123.45 },
  ];

  obtenerProductos(): Observable<Producto[]> {
    return of(this.productos);
  }
}
