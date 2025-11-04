import { Router } from "express";

const router = Router();

router.get("/:orderId", (req, res) => {
  res.json({
    orderId: req.params.orderId,
    estado: "EN_TRANSITO",
    ultimaActualizacion: new Date()
  });
});

export default router;
