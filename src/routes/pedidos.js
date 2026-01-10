const express = require('express');
const controllerPedido = require('../controllers/pedidos')
const router = express.Router();
const {validateCreatePedido, validateGetPedido }= require('../validators/pedidos');
const authMiddleware = require('../middleware/auth')

/**
 * Rutas para la gestión de pedidos
 * POST /api/pedido
 * body: {pedidoData}
 * returns pedido creado
 */
router.post("/",validateCreatePedido,controllerPedido.createPedido)//Probar con validadores Revisar videos
 
/**
  * Rutas para la gestión de pedidos
  * GET /api/pedido
  * returns lista de pedidos
  * 
  */
router.get("/", authMiddleware,controllerPedido.getPedidos)

/**
 * Rutas para la gestión de pedidos
 * GET /api/pedido/:id
 * returns un pedido
 */
router.get("/:id",validateGetPedido,controllerPedido.getPedido)

/**
 * Rutas para la gestión de pedidos
 * PUT /api/pedido
 * body: {pedidoData}
 * returns pedido actualizado
 */
router.put("/:id",validateGetPedido,validateCreatePedido,controllerPedido.updatePedido)

/** Rutas para la gestión de pedidos
 * DELETE /api/pedido
 * body: {ids: []}
 * returns pedidos eliminados
 */
router.delete("/:id",controllerPedido.deletePedido)

module.exports = router