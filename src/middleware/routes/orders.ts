import { Router } from "express";
import { crearPedidoDesdeCarrito, pedidos } from "../db";
import { MetodoPago } from "../enums";

const router = Router();

function getUserId(req: any): string {
  return (req.query.userId as string) || (req.body.userId as string);
}

// Crear pedido desde carrito
router.post("/", (req, res) => {
  const userId = getUserId(req);
  const { metodoPago, direccionEntrega, retiroEnTienda } = req.body;

  const mp = (metodoPago || MetodoPago.WEBPAY) as MetodoPago;
  const pedido = crearPedidoDesdeCarrito(userId, mp, direccionEntrega, retiroEnTienda);
  res.status(201).json(pedido);
});

// Listar pedidos de un usuario
router.get("/", (req, res) => {
  const userId = getUserId(req);
  res.json(pedidos.filter(p => p.usuarioId === userId));
});

// Obtener un pedido
router.get("/:id", (req, res) => {
  const pedido = pedidos.find(p => p.id === req.params.id);
  if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });
  res.json(pedido);
});

export default router;
