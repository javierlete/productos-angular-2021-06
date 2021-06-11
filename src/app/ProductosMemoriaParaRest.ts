import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { Producto } from "./producto";

export class ProductosMemoriaParaRest implements InMemoryDbService {
    createDb() {
        const productos: Producto[] = [
            { id: 1, nombre: 'Ratón', precio: 12.34 },
            { id: 2, nombre: 'Monitor', precio: 123.45 },
        ];
        return { productos };
    }

    genId(productos: Producto[]): number {
        return productos.length > 0 ? Math.max(...productos.map(producto => producto.id)) + 1 : 1;
    }
}