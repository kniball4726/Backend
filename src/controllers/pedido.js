const {pedidoModel} = require('../models');
const {matchedData} = require('express-validator');
const handleHttpError = require('../utils/handleError');

/**
 * Crear un pedido
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createPedido = async(req,res)=>{

    //Recoger datos del body
    req = matchedData(req);
    const params = req;

        //Crear el objeto a guardar
        try {
                 //Crear el objeto pedido a guardar
                const pedido = await pedidoModel.create(params);
                //await user.save()

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
 * Listar pedidos
 * 
 * @param {*} req 
 * @param {*} res 
 */

const getPedidos = async(req,res)=>{
    try {
        const pedidos = await pedidoModel.find();
        return res.status(200).json({
            status: "success",
            pedidos
        });
    } catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_PEDIDOS", 403);
    }

}   


/**
 * Mostrar un pedido
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getPedido = async(req,res)=>{
    req=matchedData(req);
    const {id}=req;
    try {
        const pedido = await pedidoModel.findById(id);
        res.send(pedido)
        }
    catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_PEDIDO", 403);
    }
}


/**
 * Actualizar un pedido
 * 
 * @param {*} req 
 * @param {*} res 
 */

const updatePedido = async (req, res) => {
    // Extraemos solo los datos validados
    req = matchedData(req)
    const {id,...body} = req;
    try {
        // Añadimos el objeto de configuración { new: true }
        const pedido = await pedidoModel.findByIdAndUpdate(
            id, 
            body, 
            { new: true} 
        );

        return res.status(200).json({ // Cambiado a 200 porque es una actualización, no creación
            status: "success",
            msg: "Pedido actualizado correctamente",
            pedido
        });
        
    } catch (e) {
        console.log(e); // Importante para debuguear
        handleHttpError(res, "ERROR_AL_ACTUALIZAR_PEDIDO", 500);
    }
}

/**
 * Eliminar un pedido
 * 
 * @param {*} req 
 * @param {*} res 
 */

const deletePedido = async(req,res)=>{
    
    req = matchedData(req);
    
    const {id} = req;
    
    try {
        const user = await pedidoModel.delete(id);
        return res.send({
            status: "success",
            message: "Pedido eliminado correctamente",
            user
        })
        }
    catch (e) {
        handleHttpError(res, "ERROR_AL_ELIMINAR_PEDIDO", 403);
        }
}


module.exports = {
    getPedidos,
    createPedido,
    getPedido,
    updatePedido,
    deletePedido
}