import { Router } from "express";
import { productos } from "../db";

const router = Router();

router.get("/products", (_req, res) => {
  res.json(productos);
});

router.get("/products/:id", (req, res) => {
  const prod = productos.find(p => p.id === req.params.id);
  if (!prod) return res.status(404).json({ message: "Producto no encontrado" });
  res.json(prod);
});

export default router;
