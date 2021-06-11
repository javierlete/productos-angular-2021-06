import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private url = '/api/productos/';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + id);
  }

  insertar(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }
  
  modificar(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.url, producto);
  }

  borrarProducto(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
