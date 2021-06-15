import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensajes: Mensaje[] = [];
  
  nuevo(mensaje: Mensaje): void {
    this.mensajes.push(mensaje);
  }

  limpiar(): void {
    this.mensajes = [];
  }
}
