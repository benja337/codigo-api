import { Router } from "express";

const router = Router();

router.get("/ventas", (_req, res) => {
  res.json({
    totalPedidos: 10,
    totalVentas: 120000,
    periodo: "HOY"
  });
});

export default router;
