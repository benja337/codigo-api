import { Router } from "express";
import { usuarios } from "../db";

const router = Router();

// Listar usuarios (ejemplo admin)
router.get("/", (_req, res) => {
  res.json(usuarios.map(u => ({ id: u.id, email: u.email, nombre: u.nombre })));
});

export default router;
