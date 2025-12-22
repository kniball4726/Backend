require('dotenv').config()


/**
 * Configuración de la aplicación
 * @module config
 * @return {Object} - Configuración de la aplicación
 * 
 */

module.exports = {
    PORT:process.env.PORT || 5000,
    DB_URI_MONGO:process.env.DB_URI_MONGO,
    JWT_SECRET:process.env.JWT_SECRET,
    JWT_EXPIRE:process.env.JWT_EXPIRE,
}