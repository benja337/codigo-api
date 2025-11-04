import { Router } from "express";
import { getCarritoByUsuario, productos } from "../db";

const router = Router();

// Para simplificar, pasamos userId en query/body
function getUserId(req: any): string {
  return (req.query.userId as string) || (req.body.userId as string);
}

router.get("/", (req, res) => {
  const userId = getUserId(req);
  const carrito = getCarritoByUsuario(userId);
  res.json(carrito);
});

router.post("/items", (req, res) => {
  const userId = getUserId(req);
  const { productoId, cantidad } = req.body;
  const carrito = getCarritoByUsuario(userId);
  const producto = productos.find(p => p.id === productoId);
  if (!producto) return res.status(404).json({ message: "Producto no existe" });

  const existente = carrito.items.find(i => i.productoId === productoId);
  if (existente) {
    existente.cantidad += cantidad;
  } else {
    carrito.items.push({
      productoId,
      cantidad,
      precioUnitario: producto.precioActual
    });
  }
  res.status(201).json(carrito);
});

router.delete("/items/:productoId", (req, res) => {
  const userId = getUserId(req);
  const carrito = getCarritoByUsuario(userId);
  carrito.items = carrito.items.filter(i => i.productoId !== req.params.productoId);
  res.json(carrito);
});

export default router;
