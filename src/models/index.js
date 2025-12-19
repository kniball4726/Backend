/**
 * Importar y exportar modelos de la base de datos
 * @module models/index
 * @return {Object} - Objetos de los modelos de la base de datos
 * 
 */

const models = {
    User: require('./Users'),
    Pedido: require('./Pedidos')
}

module.exports = models