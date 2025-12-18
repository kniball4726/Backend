const express = require('express')
require('@colors/colors')
const config = require('../config')
const app = express();
const cors = require('cors')
const port = config.PORT
const userRoutes = require('../../routes/user')
const pedidosRoutes = require('../../routes/pedidos')

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

//Routes
app.get('/probando',(req,res)=>{
    return res.status(200).json({
        "msg":"Bienvenido a la API de Web Supplements",
        "author":"Gregory Rodriguez",
        "email":"glrd4726ml@gmail.com",
        "github":"",
        "linkedin":"https://www.linkedin.com/in/gregory-rodriguez-927b9821b/",
        "whatsapp":"+54 9 11 6254 7723"
    })
    
})

app.get('/probando2',(req,res)=>{
    return res.status(200).send(`
        <h1 style="color:blue;">Bienvenido a la API de Web Supplements</h1>
        <ul>
            <li>Usuario: Gregory Rodriguez</li>
            <li>Email: glrd4726ml@gmail.com</li>
            <li>LinkedIn: https://www.linkedin.com/in/gregory-rodriguez-927b9821b/</li>
            <li>WhatsApp: +54 9 11 6254 7723</li>
        </ul>
        `)
    
})


app.use('/api', userRoutes)
app.use('/api', pedidosRoutes)


const server = async() => {
    try {
        await app.listen(port, () => 
            console.log("\nServidor corriendo por el puerto:",port.brightGreen))        
    } catch (e) {
        console.error("\nError al iniciar el servidor: ",e);
    
    }

}
module.exports = server
