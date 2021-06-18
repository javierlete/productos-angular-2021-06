import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeService } from './mensaje.service';
import { Producto } from './producto';
import { catchError, tap } from 'rxjs/operators';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = 'http://localhost:3000/productos/';
  private urlCategorias = 'http://localhost:3000/categorias/';

  constructor(private http: HttpClient, private mensajeService: MensajeService) { }

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url + '?_expand=categoria').pipe(
      tap(_ => this.mensajeService.nuevo({ texto: 'Se han obtenido los productos', nivel: 'success' })),
      catchError(() => {
        this.mensajeService.nuevo({ texto: 'Error al obtener los productos', nivel: 'danger' })
        return [];
      })
    );
  }

  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.urlCategorias).pipe(
      tap(_ => this.mensajeService.nuevo({ texto: 'Se han obtenido las categorias', nivel: 'success' })),
      catchError(() => {
        this.mensajeService.nuevo({ texto: 'Error al obtener las categorias', nivel: 'danger' })
        return [];
      })
    );
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + id + '?_expand=categoria').pipe(
      tap(_ => this.mensajeService.nuevo({ texto: 'Se ha obtenido el producto ' + id, nivel: 'success' })),
      catchError(() => {
        this.mensajeService.nuevo({ texto: 'Error al obtener el producto ' + id, nivel: 'danger' })
        return [];
      })
    );
  }

  insertar(producto: Producto): Observable<Producto> {
    const p: any = producto;
    p.categoriaId = producto.categoria.id;
    delete p.categoria;
    return this.http.post<Producto>(this.url, p as Producto).pipe(
      tap(_ => this.mensajeService.nuevo({ texto: 'Se ha insertado el producto ' + producto.nombre, nivel: 'success' })),
      catchError(() => {
        this.mensajeService.nuevo({ texto: 'Error al insertar el producto ' + producto.nombre, nivel: 'danger' })
        return [];
      })
    );
  }

  modificar(producto: Producto): Observable<Producto> {
    const p: any = producto;
    p.categoriaId = producto.categoria.id;
    delete p.categoria;
    return this.http.put<Producto>(this.url + producto.id, p as Producto).pipe(
      tap(_ => this.mensajeService.nuevo({ texto: 'Se ha modificado el producto ' + producto.id, nivel: 'success' })),
      catchError(() => {
        this.mensajeService.nuevo({ texto: 'Error al modificar el producto ' + producto.id, nivel: 'danger' })
        return [];
      })
    );
  }

  borrarProducto(id: number): Observable<any> {
    return this.http.delete(this.url + id).pipe(
      tap(_ => this.mensajeService.nuevo({ texto: 'Se ha borrado el producto ' + id, nivel: 'success' })),
      catchError(() => {
        this.mensajeService.nuevo({ texto: 'Error al borrar el producto ' + id, nivel: 'danger' })
        return [];
      })
    );
  }
}
