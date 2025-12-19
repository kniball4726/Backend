const validator = require('validator');
const User = require('../models/Users');

/**
 * Crear un usuario
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createUser = (req,res)=>{

    //Recoger datos del body
    let params = req.body;
    
    //Validar datos
    try {
        let validar_username = !validator.isEmpty(params.username);
        let validar_email = !validator.isEmpty(params.email) || !validator.isEmail(params.email);
        let validar_password = !validator.isEmpty(params.password);
        let validar_role = !validator.isEmpty(params.role);
        let validar_dni = !validator.isEmpty(params.dni);

        if(!validar_username || !validar_email || !validar_password || !validar_role || !validar_dni){
            throw new Error("Los datos no son validos");
        }
    }catch (error) {
        return res.status(400).json({
            status: "error",
            msg: "Faltan datos por enviar"
        })

    }

    //Crear el objeto usuario a guardar
    const user = new User(params);

    //asignar valores al objeto usuario

    //Guardar usuario en la base de datos
    user.save()
        .then((userStored)=>{
            return res.status(200).json({
                status: "success",
                user: userStored
            });
        })
        .catch((err)=>{
            return res.status(500).json({
                status: "error",
                msg: "Error al guardar el usuario",
                error: err.message
            });
        });
}



/**
 *  Listar todos los usuarios
 * @param {*} req 
 * @param {*} res 
 */
const readAll = (req,res)=>{
    //Recoger datos del body
    let params = req.body;

    //Validar datos

    //Devolver respuesta
}   


/**
 * Mostrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const readOne = (req,res)=>{
    res.send("Mostrar un usuario")
}

/**
 * Actualizar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = (req,res)=>{
    res.send("Actualizar un usuario")
}

/**
 * Eliminar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = (req,res)=>{
    res.send("Eliminar un usuario")
}

module.exports = {
    readAll,
    createUser,
    readOne,
    updateUser,
    deleteUser
}