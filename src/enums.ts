export enum Categoria {
  LASANIA = "LASANIA",
  RAVIOLES = "RAVIOLES",
  NOQUIS = "NOQUIS",
  SALSAS = "SALSAS",
  POSTRES = "POSTRES"
}

export enum EstadoPedido {
  PENDIENTE = "PENDIENTE",
  EN_PREPARACION = "EN_PREPARACION",
  EN_TRANSITO = "EN_TRANSITO",
  ENTREGADO = "ENTREGADO",
  RECHAZADO = "RECHAZADO"
}

export enum MetodoPago {
  WEBPAY = "WEBPAY",
  PAYPAL = "PAYPAL",
  EFECTIVO = "EFECTIVO"
}

export enum RolUsuario {
  CLIENTE = "CLIENTE",
  ADMIN = "ADMIN"
}
