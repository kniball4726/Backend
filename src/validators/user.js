const {check} = require('express-validator');
const validateResults = require('../utils/handleValidator');

/**
 * Validadores para las rutas de usuario
 * @module validators/user
 */

/**
 * Validador para la creación de un usuario
 * @returns {Array} - Array de validaciones
 */


const validateCreateUser = 
            [
                check('username').isString().exists().notEmpty().isLength({ min: 1 }).withMessage('El nombre de usuario es obligatorio y debe ser una cadena de texto.'),
                check('email').notEmpty().exists().isEmail().withMessage('El correo electrónico debe ser válido.'),
                check('password').notEmpty().exists().isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.').isString(),
                check('dni').isNumeric().exists().notEmpty().withMessage('El DNI es obligatorio y debe ser numérico.'),
                check('role').exists().notEmpty().optional().isIn(['user', 'admin']).withMessage('El rol debe ser user o admin.'),
                (req, res, next) => validateResults(req, res, next)
            ];

const validateGetUser = 
            [
                check('id').isMongoId().exists().notEmpty().withMessage('El ID proporcionado no es válido.'),
                (req, res, next) => validateResults(req, res, next)
            ];

module.exports = {
    validateCreateUser,
    validateGetUser
}