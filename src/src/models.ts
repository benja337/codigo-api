import { Categoria, EstadoPedido, MetodoPago, RolUsuario } from "./enums";

export interface Usuario {
  id: string;
  email: string;
  passwordHash: string;
  nombre: string;
  metodoAutenticacion: "LOCAL" | "FACEBOOK" | "GOOGLE";
  autenticado: boolean;
  rol: RolUsuario;
  fechaRegistro: Date;
}

export interface InformacionNutricional {
  descripcion: string;
}

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precioActual: number;
  stockActual: number;
  categoria: Categoria;
  infoNutricional?: InformacionNutricional;
}

export interface ItemCarrito {
  productoId: string;
  cantidad: number;
  precioUnitario: number;
}

export interface Carrito {
  id: string;
  usuarioId: string;
  items: ItemCarrito[];
}

export interface Pedido {
  id: string;
  usuarioId: string;
  items: ItemCarrito[];
  total: number;
  estado: EstadoPedido;
  metodoPago: MetodoPago;
  fecha: Date;
  direccionEntrega?: string;
  retiroEnTienda: boolean;
}

export interface Valoracion {
  id: string;
  usuarioId: string;
  productoId: string;
  estrellas: number;
  comentario: string;
  fecha: Date;
}
