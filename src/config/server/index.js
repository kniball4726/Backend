const express = require('express')
const colors = require('@colors/colors')
const config = require('../config')
const app = express();

const port = config.PORT

const server = async() => {
    try {
        await app.listen(port, () => 
            console.log("\nServidor corriendo por el puerto:",port.brightGreen))        
    } catch (e) {
        console.error("\nError al iniciar el servidor: ",e);
    
    }

}
module.exports = server
