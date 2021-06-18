import { Categoria } from "./categoria";

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: Categoria;
}
