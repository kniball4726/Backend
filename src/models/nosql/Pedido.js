const {Schema, model} = require('mongoose');

/**
 * Definicion del esquema y modelo de Pedido
 * @module models/Pedidos
 * @return {Object} - Modelo de Pedido
 */
const pedidoSchema = new Schema(

    {
        nota_pedido: {type: Number, required: true, unique: true},
        cliente: {type: String, required: true},
        bultos: {type: Number, required: true},
        num_pedido: {type: Number, required: true},
        logistica: {type: String, required: true},
        usuario: {type: String, required: true},
        nota: {type: String, required: false},
        archivo: {type: String, required: false}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Pedido = model('Pedido', pedidoSchema, 'pedidos');

module.exports = Pedido;