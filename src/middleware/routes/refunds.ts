import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  res.status(201).json({
    orderId: req.body.orderId,
    motivo: req.body.motivo,
    estado: "PENDIENTE_REVISION"
  });
});

export default router;
