const {check} = require('express-validator');
const validateResults = require('../utils/handleValidator');

/**
 * Validadores para las rutas de pedido
 * @module validators/pedido
 */

/**
 * Validador para la creación de un pedido
 * @returns {Array} - Array de validaciones
 */

const validateCreatePedido = () => {
    return [
        check("nota_pedido").exists().notEmpty().isNumeric(),
        check("cliente").exists().notEmpty().isString(),
        check("bultos").exists().notEmpty().isNumeric(),
        check("num_pedido").exists().notEmpty().isNumeric(),
        check("logistica").exists().notEmpty().isString(),
        check("usuario").exists().notEmpty().isString(),
        check("nota").optional().isString(),
        check("archivo").optional().isString(),
        (req, res, next) => validateResults(req, res, next)
    ];
};

module.exports = validateCreatePedido;