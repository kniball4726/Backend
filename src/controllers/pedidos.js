/**
 * Crear un pedido
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const create = (req, res) => {
    return res.status(200).send("Create pedido");
}

/**
 * Leer todos los pedidos
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const readAll = (req, res) => {
    return res.status(200).send("Read Pedidos")
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
    create,
    readAll,
    update,
    remove,
    removeone,
    readOne
}