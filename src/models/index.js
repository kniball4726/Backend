/**
 * Modelo principal de la aplicacion
 * @module models/index
 * @return {Object} - Modelos de la aplicacion 
 */

const models = {
    userModel: require('./nosql/User'),
    pedidoModel: require('./nosql/Pedido'),
    storageModel: require('./nosql/Storage')
};

module.exports = models;