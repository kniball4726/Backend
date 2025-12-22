const express = require('express');
const controllerPedido = require('../controllers/pedidos')
const router = express.Router();

/**
 * Rutas para la gestión de pedidos
 * POST /api/pedido
 * body: {pedidoData}
 * returns pedido creado
 *
 */
router.post("/", controllerPedido.create)

/**
 * Rutas para la gestión de pedidos
 * GET /api/pedido
 * returns lista de pedidos
 */
router.get("/", controllerPedido.readAll)

/**
 * Rutas para la gestión de pedidos
 * GET /api/pedido/:id
 * returns un pedido
 */
router.get("/:id", controllerPedido.readOne)

/**
 * Rutas para la gestión de pedidos
 * PUT /api/pedido
 * body: {pedidoData}
 * returns pedido actualizado
 */
router.put("/", controllerPedido.update)

/** Rutas para la gestión de pedidos
 * DELETE /api/pedido
 * body: {ids: []}
 * returns pedidos eliminados
 */
router.delete("/", controllerPedido.remove)

/** Rutas para la gestión de pedidos
 * DELETE /api/pedido/:id
 * returns un pedido eliminado
 */
router.delete("/:id", controllerPedido.removeone)


module.exports = router