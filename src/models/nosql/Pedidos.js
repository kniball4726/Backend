const {Schema, model} = require('mongoose');

/**
 * Definicion del esquema y modelo de Pedido
 * @module models/Pedidos
 * @return {Object} - Modelo de Pedido
 */
const pedidoSchema = new Schema(

    {
        id_usuario: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        productos: [{
            id_producto: {
                type: Schema.Types.ObjectId,
                ref: 'Producto',
                required: true
            },
            cantidad: {
                type: Number,
                required: true
            }
        }],
        total_pedido: {
            type: Number,
            required: true
        },
        estado_pedido: {
            type: String,
            enum: ['pendiente', 'confirmado', 'enviado', 'entregado'],
            default: 'pendiente'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Pedido = model('Pedido', pedidoSchema, 'pedidos');

module.exports = Pedido;