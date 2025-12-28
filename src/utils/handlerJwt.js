const jsonwebtoken = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/config');


/**
 * Generar un token JWT
 * 
 * @param {Object} user - Datos del usuario
 * @returns {string} token - Token JWT
 */
const tokenSign = async(user) => {
    const sign = await jsonwebtoken.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: JWT_EXPIRES_IN
        }
    );
    return sign;
}

/**
 * Verificar un token JWT
 * 
 * @param {string} token - Token JWT
 * @returns {Object|null} payload - Datos del usuario o null si el token no es válido
 */ 

const verifyToken = async(token) => {
    try {
        return jsonwebtoken.verify(token, JWT_SECRET);
    } catch (e) {
        return null;
    }
}

module.exports = { tokenSign }; 