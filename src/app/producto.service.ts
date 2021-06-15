import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeService } from './mensaje.service';
import { Producto } from './producto';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private url = 'http://localhost:3000/productos/';

  constructor(private http: HttpClient, private mensajeService: MensajeService) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url).pipe(
      tap(_ => this.mensajeService.nuevo('Se han obtenido los productos'))
    );
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + id);
  }

  insertar(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }
  
  modificar(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.url + producto.id, producto);
  }

  borrarProducto(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
