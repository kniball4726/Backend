const {pedidoModel} = require('../models');
const {matchedData} = require('express-validator');
const handleHttpError = require('../utils/handleError');

/**
 * Crear un pedido
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createPedido = async(req, res) => {
    //Recoger datos del body
       let params = matchedData(req);
   
           //Crear el objeto a guardar
           try {
                    //Crear el objeto usuario a guardar
                   const pedido = await pedidoModel.create(params);
                  // await pedido.save()

                   return res.status(201).json({
                       status: "success",
                       msg: "Pedido creado correctamente",
                       pedido

                   });
                   
               } catch (e) {
                   handleHttpError(res, "ERROR_AL_CREAR_PEDIDO", 403);
               }
   
   }
   
/**
 * Leer todos los pedidos
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getPedidos = async(req,res)=>{
    try {
        const pedidos = await pedidosModel.find();
        return res.status(200).json({
            status: "success",
            pedidos
        });
    } catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_PEDIDOS", 403);
    }

}   

/**
 * Leer un pedido
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getPedido = async(req, res) => {
    
    try {
    
        return res.status(200).send("Mostrar un pedido")
    } catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_PEDIDO", 403);
    }
}

/**
 * Actualizar un pedido
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const updatePedido = async(req, res) => {
    try {
        
    } catch (e) {
        handleHttpError(res, "ERROR_AL_ACTUALIZAR_PEDIDO", 403);
    }
}

/**
 * Eliminar todos los pedidos
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const removePedido = async(req, res) => {
    try {
        
    } catch (e) {
        handleHttpError(res, "ERROR_AL_ELIMINAR_PEDIDOS", 403);
    }    
}


module.exports = {
    createPedido,
    getPedidos,
    updatePedido,
    removePedido,
    getPedido
}