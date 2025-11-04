import { Carrito, Pedido, Producto, Usuario, Valoracion } from "./models";
import { Categoria, EstadoPedido, MetodoPago, RolUsuario } from "./enums";
import { genId, hashPassword } from "./util";

export const usuarios: Usuario[] = [
  {
    id: genId(),
    email: "ana@example.com",
    passwordHash: hashPassword("Clave2025"),
    nombre: "Ana",
    metodoAutenticacion: "LOCAL",
    autenticado: false,
    rol: RolUsuario.CLIENTE,
    fechaRegistro: new Date()
  }
];

export const productos: Producto[] = [
  {
    id: genId(),
    nombre: "Lasaña clásica",
    descripcion: "Lasaña de carne y salsa boloñesa",
    precioActual: 9990,
    stockActual: 30,
    categoria: Categoria.LASANIA,
    infoNutricional: { descripcion: "Porción 350g, 650 kcal" }
  }
];

export const carritos: Carrito[] = [];
export const pedidos: Pedido[] = [];
export const valoraciones: Valoracion[] = [];

// Funciones helper tipo “repositorio” simple
export function findUsuarioByEmail(email: string): Usuario | undefined {
  return usuarios.find(u => u.email === email);
}

export function getCarritoByUsuario(usuarioId: string): Carrito {
  let carrito = carritos.find(c => c.usuarioId === usuarioId);
  if (!carrito) {
    carrito = { id: genId(), usuarioId, items: [] };
    carritos.push(carrito);
  }
  return carrito;
}

export function crearPedidoDesdeCarrito(
  usuarioId: string,
  metodoPago: MetodoPago,
  direccionEntrega?: string,
  retiroEnTienda: boolean = false
): Pedido {
  const carrito = getCarritoByUsuario(usuarioId);
  const total = carrito.items.reduce(
    (acc, item) => acc + item.cantidad * item.precioUnitario,
    0
  );
  const pedido: Pedido = {
    id: genId(),
    usuarioId,
    items: [...carrito.items],
    total,
    estado: EstadoPedido.PENDIENTE,
    metodoPago,
    fecha: new Date(),
    direccionEntrega,
    retiroEnTienda
  };
  pedidos.push(pedido);
  carrito.items = [];
  return pedido;
}
