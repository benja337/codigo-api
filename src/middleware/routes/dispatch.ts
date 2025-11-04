import { Router } from "express";

const router = Router();

router.post("/schedule", (req, res) => {
  res.json({
    orderId: req.body.orderId,
    fechaEntregaEstimada: new Date(),
    tipo: req.body.tipo || "DOMICILIO"
  });
});

export default router;
