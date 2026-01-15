const express = require('express');
const controllerPedido = require('../controllers/pedidos')
const router = express.Router();
const {validateCreatePedido, validateGetPedido }= require('../validators/pedidos');
const authMiddleware = require('../middleware/auth')
const roleMiddleware = require('../middleware/role');
const cacheInit = require('../middleware/cache')

/**
 * Rutas para la gestión de pedidos
 * POST /api/pedido
 * body: {pedidoData}
 * returns pedido creado
 */
router.post("/", authMiddleware,validateCreatePedido,controllerPedido.createPedido)//Probar con validadores Revisar videos
 
/**, 
  * Rutas para la gestión de pedidos
  * GET /api/pedido
  * returns lista de pedidos
  * 
  */
router.get("/", cacheInit,authMiddleware,roleMiddleware(["admin"]),controllerPedido.getPedidos)

/**
 * Rutas para la gestión de pedidos
 * GET /api/pedido/:id
 * returns un pedido
 */
router.get("/:id",cacheInit,authMiddleware,validateGetPedido,controllerPedido.getPedido)

/**
 * Rutas para la gestión de pedidos
 * PUT /api/pedido
 * body: {pedidoData}
 * returns pedido actualizado
 */
router.put("/:id",authMiddleware,validateGetPedido,validateCreatePedido,controllerPedido.updatePedido)

/** Rutas para la gestión de pedidos
 * DELETE /api/pedido
 * body: {ids: []}
 * returns pedidos eliminados
 */
router.delete("/:id", authMiddleware, controllerPedido.deletePedido)

module.exports = router