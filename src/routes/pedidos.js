const express = require('express');
const controllerPedido = require('../controllers/pedidos')
const router = express.Router();

//Create Pedido
router.post("/pedidos",(req,res)=>{
     res.send("Create pedido");
})

//Read Pedido
router.get("/pedidos",(req,res)=>{
    res.send("Read Pedidos")
})

//Update Pedido
router.put("/pedidos",(req,res)=>{
    res.send("Update pedido")
})

//Delete Pedido
router.delete("/pedidos",(req,res)=>{
    res.send("Delete Pedido")
})


module.exports = router