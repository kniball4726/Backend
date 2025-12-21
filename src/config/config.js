require('dotenv').config()
/**
 * Configuraciones de la aplicacion
 * @module config/config
 * @return {Object} - Objeto con las configuraciones de la aplicacion
 */
module.exports = {
    PORT:process.env.PORT || 5000,
    DB_URI_MONGO:process.env.DB_URI_MONGO,
    JWT_SECRET:process.env.JWT_SECRET,
    JWT_EXPIRE:process.env.JWT_EXPIRE,
}