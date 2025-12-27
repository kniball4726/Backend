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

const validateCreateStorage =
            [
                check("filename").exists().notEmpty().isString().isLength({ min: 1 }).withMessage('El nombre del archivo es obligatorio y debe ser una cadena de texto.'),
                check("url").exists().notEmpty().isString().isLength({ min: 1 }).withMessage('La url es obligatoria y debe ser una cadena de texto.'),
                (req, res, next) => validateResults(req, res, next)
            ];

const validateGetStorage = 
            [
                check('id').isMongoId().exists().notEmpty().withMessage('El ID proporcionado no es válido.'),
                (req, res, next) => validateResults(req, res, next)
            ];

module.exports = { 
    validateCreateStorage, 
    validateGetStorage 
}