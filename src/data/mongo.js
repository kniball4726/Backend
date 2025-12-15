const mongoose = require('mongoose');
require('dotenv').config();
db_uri = process.env.DB_URI


const data = async()=>{
    try {
        mongoose.connect(db_uri)
        console.log("\nConectado con exito a la base de datos")    
    } catch (error) {
        throw new Error("\nNo se puede conectar a la base de datos: ",error);
    }
    
}

module.exports = data