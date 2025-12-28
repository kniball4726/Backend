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
    PUBLIC_URL:process.env.PUBLIC_URL || 'http://localhost:5000',
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN
}