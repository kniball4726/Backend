const mongoose = require('mongoose');
const color = require('@colors/colors')
require('dotenv').config();
db_uri = process.env.DB_URI_MONGO


const data = async()=>{
    try {
        await mongoose.connect(db_uri)
        console.log("\nConectado con exito a la base de datos".brightGreen)    
    } catch (e) {
        console.error("\nNo se puede conectar a la base de datos: ",e);
    }
    
}


module.exports = data