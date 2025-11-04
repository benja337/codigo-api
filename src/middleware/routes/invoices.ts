import { Router } from "express";

const router = Router();

router.get("/:orderId", (req, res) => {
  res.json({
    orderId: req.params.orderId,
    pdfUrl: "https://example.com/factura-demo.pdf"
  });
});

export default router;
