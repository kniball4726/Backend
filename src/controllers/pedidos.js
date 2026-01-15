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

    
        //Crear el objeto a guardar
        try {
                //Recoger datos del body
                req = matchedData(req);
                const params = req;

                 //Crear el objeto pedido a guardar
                const pedido = await pedidoModel.create(params);

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
        if (pedidos.length === 0) {
            return handleHttpError(res, "NO_HAY_PEDIDOS", 404);
        }
        
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
    try {
        const {id}=req.params;
        const pedido = await pedidoModel.findById(id);
        if (!pedido) {
            return handleHttpError(res, "PEDIDO_NO_ENCONTRADO", 404);
        }
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
    try {
        // Extraemos solo los datos validados
        req = matchedData(req)
        const {id,...body} = req;
    
        // Añadimos el objeto de configuración { new: true }
        const pedido = await pedidoModel.findByIdAndUpdate(
            id, 
            body, 
            { new: true} 
        );
        if (!pedido) {
            return handleHttpError(res, "PEDIDO_NO_ENCONTRADO", 404);
        }

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
    
    
    try {
        req = matchedData(req);
    
        const {id} = req;

        const user = await pedidoModel.deleteOne(id);
        if (!user) {
            return handleHttpError(res, "PEDIDO_NO_ENCONTRADO", 404);
        }
        return res.send({
            status: "success",
            message: "Pedido eliminado correctamente",
            user
        })
        }
    catch (e) {
        console.log(e);
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