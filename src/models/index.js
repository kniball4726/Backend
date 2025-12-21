/**
 * Modelo principal de la aplicacion
 * @module models/index
 * @return {Object} - Modelos de la aplicacion 
 */

const models = {
    userModel: require('./nosql/Users'),
    pedidosModel: require('./nosql/Pedidos'),
    storageModel: require('./nosql/Storage')
};

module.exports = models;