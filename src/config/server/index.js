const express = require('express')
require('@colors/colors')
const config = require('../config')
const app = express();
const cors = require('cors')
const port = config.PORT
const allRoutes = require('../../routes')

/**
 * Middlewares de la aplicación
 * @module middlewares
 * @return {Object} - Middlewares de la aplicación
 *  
 */
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use("/uploads",express.static('src/storage'))

/**
 * Rutas de la API
 * /api
 * @module routes
 * @return {Object} - Rutas de la API
 *      
 */
app.use('/api', allRoutes)

/**
 * Función para iniciar el servidor
 * @module server
 * @return {void}
 * 
 */

const server = async() => {

    try {
        await app.listen(port, () => 
            console.log("\nServidor corriendo por el puerto:",port.brightGreen))        
    } catch (e) {
        console.error("\nError al iniciar el servidor: ",e);
    
    }

}

module.exports = server
