const mongoose = require('mongoose');
require('@colors/colors')
const config = require('../config')

const db_uri_mongo = config.DB_URI_MONGO

/**
 * Conectar a la base de datos MongoDB Atlas
 * @return {Promise} - Promesa que se resuelve cuando la conexion es exitosa
 * @throws {Error} - Error si la conexion falla
 */

const data = async()=>{
    
    try {
        await mongoose.connect(db_uri_mongo)
        console.log("\nConectado con exito a la base de datos MongoDB Atlas".brightGreen)    
    } catch (e) {
        console.error("\nNo se puede conectar a la base de datos: ",e);
    }
    
}


module.exports = data