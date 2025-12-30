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


const validateRegister = 
            [
                check('username').isString().exists().notEmpty().isLength({ min:3, max:50 }).withMessage('El nombre de usuario es obligatorio y debe ser una cadena de texto.'),
                check('email').notEmpty().exists().isEmail().withMessage('El correo electrónico debe ser válido.'),
                check('password').isString().notEmpty().exists().isLength({ min: 3, max: 15 }).withMessage('La contraseña debe tener al menos 6 caracteres.').isString(),
                check('dni').isNumeric().exists().notEmpty().withMessage('El DNI es obligatorio y debe ser numérico.'),
                (req, res, next) => validateResults(req, res, next)
            ];

const validateLogin = 
            [
                check('email').notEmpty().exists().isEmail().withMessage('El correo electrónico debe ser válido.'),
                check('password').isString().notEmpty().exists().isLength({ min: 3, max: 15 }).withMessage('La contraseña debe tener al menos 6 caracteres.').isString(),
                (req, res, next) => validateResults(req, res, next)
            ];


module.exports = {
    validateRegister,
    validateLogin
}