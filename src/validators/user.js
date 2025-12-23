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


const validateCreateUser = () => {
    return [
                check('username').isString().exists().notEmpty(),
                check('email').notEmpty().exists().isEmail(),
                check('password').notEmpty().exists().isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.').isString(),
                check('dni').isNumeric().exists().notEmpty(),
                check('role').exists().notEmpty().optional().isIn(['user', 'admin']).withMessage('El rol debe ser user o admin.'),
                (req, res, next) => validateResults(req, res, next)
            ];
};

module.exports = validateCreateUser;