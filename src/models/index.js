/**
 * Modelo principal de la aplicacion
 * @module models/index
 * @return {Object} - Modelos de la aplicacion 
 */

const models = {
    userModel: require('./nosql/Users'),
    pedidoModel: require('./nosql/Pedidos'),
    storageModel: require('./nosql/Storages')
};

module.exports = models;