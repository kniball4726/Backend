const express = require('express');
const controllerPedido = require('../controllers/pedidos')
const router = express.Router();

//Create Pedido
router.post("/", controllerPedido.create)

//Read Pedido
router.get("/", controllerPedido.readAll)

//Read One Pedido
router.get("/:id", controllerPedido.readOne)

//Update Pedido
router.put("/", controllerPedido.update)

//Delete Pedidos
router.delete("/", controllerPedido.remove)

//Delete One Pedido
router.delete("/:id", controllerPedido.removeone)


module.exports = router