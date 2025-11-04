import { Router } from "express";
import { checkPassword, genId, hashPassword } from "../util";
import { findUsuarioByEmail, usuarios } from "../db";
import { RolUsuario } from "../enums";

const router = Router();

// Registro
router.post("/register", (req, res) => {
  const { email, password, nombre } = req.body;

  if (findUsuarioByEmail(email)) {
    return res.status(409).json({ message: "El email ya está en uso" });
  }
  if (!password || password.length < 6) {
    return res
      .status(400)
      .json({ message: "La contraseña no cumple los requisitos" });
  }

  const nuevo = {
    id: genId(),
    email,
    passwordHash: hashPassword(password),
    nombre,
    metodoAutenticacion: "LOCAL" as const,
    autenticado: false,
    rol: RolUsuario.CLIENTE,
    fechaRegistro: new Date()
  };
  usuarios.push(nuevo);

  res.status(201).json({ id: nuevo.id, email: nuevo.email, nombre: nuevo.nombre });
});

// Login simple (sin JWT, solo demo)
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = findUsuarioByEmail(email);

  if (!user || !checkPassword(password, user.passwordHash)) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  // Para el proyecto puedes simular un token fijo
  const token = `fake-token-${user.id}`;
  res.json({ token, user: { id: user.id, email: user.email, nombre: user.nombre } });
});

export default router;
