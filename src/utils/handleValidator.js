const {validationResult} = require('express-validator');

/**
 * Manejador de validadores
 * @module utils/handleValidator
 */

/**
 * Maneja los errores de validación
 * @param {Object} req - Objeto de solicitud
 * @param {Object} res - Objeto de respuesta
 * @param {Function} next - Función next para pasar al siguiente middleware
 */
const validateResults = (req, res, next) => {
    try {
        validationResult(req)
        .throw();
        return next();


    } catch (error) {
        return res.status(403).json(
            { 
                errors: error.array() 
            });

    }
};

module.exports = validateResults;