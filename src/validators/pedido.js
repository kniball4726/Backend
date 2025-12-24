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

const validateCreatePedido =
    [
        check("nota_pedido").exists().notEmpty().isNumeric().withMessage('La nota del pedido es obligatoria y debe ser numérica.'),
        check("cliente").exists().notEmpty().isString().isLength({ min: 1 }).withMessage('El cliente es obligatorio y debe ser una cadena de texto.'),
        check("bultos").exists().notEmpty().isNumeric().withMessage('Los bultos son obligatorios y deben ser numéricos.'),
        check("num_pedido").exists().notEmpty().isNumeric().withMessage('El número de pedido es obligatorio y debe ser numérico.'),
        check("logistica").exists().notEmpty().isString().isLength({ min: 1 }).withMessage('La logística es obligatoria y debe ser una cadena de texto.'),
        check("usuario").exists().notEmpty().isString().isLength({ min: 1 }).withMessage('El usuario es obligatorio y debe ser una cadena de texto.'),
        check("nota").optional().isString(),
        check("archivo").optional().isString(),
        (req, res, next) => validateResults(req, res, next)
    ];

module.exports = validateCreatePedido;