const express = require('express')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const server = async() => {
    try {
        app.listen(port, () => console.log("\nServidor corriendo por el puerto:",port))        
    } catch (error) {
        throw new Error("\nError al iniciar el servidor: ",error);
        
    }

}
module.exports = server
