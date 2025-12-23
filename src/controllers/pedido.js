const {pedidoModel} = require('../models');

/**
 * Crear un pedido
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createPedido = async(req, res) => {
    //Recoger datos del body
       let params = req.body;
   
           //Crear el objeto a guardar
           try {
                    //Crear el objeto usuario a guardar
                   const pedido =  new pedidoModel(params);
                   await pedido.save()

                   return res.status(201).json({
                       status: "success",
                       msg: "Pedido creado correctamente"
                   });
                   
               } catch (error) {
                   console.log(error);
                   return res.status(500).json({
                       status: "error",
                       msg: "Error al guardar el pedido"
                   });
               }
   
   }
   
/**
 * Leer todos los pedidos
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const readAll = async(req,res)=>{
    try {
        const pedidos = await pedidosModel.find();
        return res.status(200).json({
            status: "success",
            pedidos
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: "Error al listar los usuarios",
            error: error.message
        });
    }

}   

/**
 * Leer un pedido
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const readOne = (req, res) => {
    return res.status(200).send("Mostrar un pedido")
}

/**
 * Actualizar un pedido
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const update = (req, res) => {
    return res.status(200).send("Update pedido")
}

/**
 * Eliminar todos los pedidos
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const remove = (req, res) => {
    return res.status(200).send("Delete Pedido")
}

/**
 * Eliminar un pedido
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const removeone = (req, res) => {
    return res.status(200).send("Delete un Pedido")
}

module.exports = {
    createPedido,
    readAll,
    update,
    remove,
    removeone,
    readOne
}