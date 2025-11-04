import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import catalogRoutes from "./routes/catalog";
import cartRoutes from "./routes/cart";
import orderRoutes from "./routes/orders";
import paymentRoutes from "./routes/payments";
import invoiceRoutes from "./routes/invoices";
import dispatchRoutes from "./routes/dispatch";
import trackingRoutes from "./routes/tracking";
import refundRoutes from "./routes/refunds";
import reportRoutes from "./routes/reports";

import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/error";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.json({ message: "LibreRico API up" });
});

// Prefix /api para todo
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/catalog", catalogRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/dispatch", dispatchRoutes);
app.use("/api/tracking", trackingRoutes);
app.use("/api/refunds", refundRoutes);
app.use("/api/reports", reportRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`LibreRico API escuchando en http://localhost:${PORT}`);
});
