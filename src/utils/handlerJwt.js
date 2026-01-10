const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/config');
const handleHttpError = require('./handleError');

const JWT_SECRET = config.JWT_SECRET;
const JWT_EXPIRES_IN = config.JWT_EXPIRES_IN;

/**
 * Debe pasar un objeto de usuario y te devuelve un token JWT
 * @param {*} user 
 * @returns 
 */

const tokenSign = async(user) => {
    try {
        const payload = {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            imagen: user.imagen,
            iat: moment().unix(),
            exp: moment().add(2, 'days').unix(),
        };

        if (!payload) {
            throw new Error('No se pudo crear el token');
        }

        const jwtnew = await jwt.encode(payload, JWT_SECRET);

        return jwtnew;    
    } catch (error) {
        handleHttpError(res, "ERROR_AL_GENERAR_TOKEN", 500);
    }   
    
}

/**
 * Debes pasar el token JWT y te devuelve los datos del usuario
 * 
 * @param {string} token - Token JWT
 * @returns {Object|null} payload - Datos del usuario o null si el token no es válido
 */ 

const verifyToken = (token) => {
        const payload = jwt.verify(token, JWT_SECRET);
        if(!payload){
            return null;
        }
        return payload;
}

module.exports = { tokenSign, verifyToken }; 