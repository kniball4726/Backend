const jwt = require('jsonwebtoken');
const config = require('../config/config');
const handleHttpError = require('./handleError');

const JWT_SECRET = config.JWT_SECRET;
const JWT_EXPIRES_IN = config.JWT_EXPIRES_IN;

/**
 * Debes pasar un objeto de usuario y te genera un token JWT
 * 
 * @param {Object} user - Datos del usuario
 * @returns {string} token - Token JWT
 */
const tokenSign = async(user) => {
    try {
        const sign = await jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: JWT_EXPIRES_IN,   
        });
        
        return sign;    
    } catch (error) {
        handleHttpError(res, "ERROR_AL_GENERAR_TOKEN", 403);
    }
}

/**
 * Debes pasar el token JWT y te devuelve los datos del usuario
 * 
 * @param {string} token - Token JWT
 * @returns {Object|null} payload - Datos del usuario o null si el token no es válido
 */ 

const verifyToken = async(token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (e) {
        return null;
    }
}

module.exports = { tokenSign, verifyToken }; 