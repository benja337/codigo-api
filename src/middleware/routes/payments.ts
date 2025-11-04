import { Router } from "express";

const router = Router();

router.post("/pay", (req, res) => {
  // Simula pago exitoso
  res.json({ status: "OK", provider: req.body.provider || "WEBPAY" });
});

export default router;
