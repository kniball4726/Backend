const { matchedData } = require('express-validator');
const {userModel, logModel} = require('../models');
const handleHttpError = require('../utils/handleError');
const {encrypt, compare} = require('../utils/handlePassword');
const { tokenSign } = require('../utils/handlerJwt');

/**
 * Crear un usuario
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createUser = async(req,res)=>{
    try {
        req = matchedData(req);
        const password = await encrypt (req.password);
        const body = {...req, password};
        const dataUser = await userModel.create(body);
        
        dataUser.set("password", undefined, { strict: false });

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
    }
        res.send({
            status: "success",
            message: "Usuario creado correctamente",
            data
        });  
          
    } catch (error) {
        console.log(error);
        handleHttpError(res, "ERROR_AL_CREAR_USUARIO", 403);
    }
       
}


/**  
 * Listar usuarios
 * 
 * @param {*} req 
 * @param {*} res 
 */

const getUsers = async(req,res)=>{
    try {
        const users = await userModel.find();
        if (users.length === 0) {
            return handleHttpError(res, "NO_HAY_USUARIOS", 404);
        }
        return res.status(200).json({
            status: "success",
            users
        });
    } catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_USUARIOS", 403);
    }

}   


/**
 * Mostrar un usuario
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getUser = async(req,res)=>{
    const {id}= req.params;
    try {
        const user = await userModel.findById(id);
        if (!user) {
            return handleHttpError(res, "USUARIO_NO_ENCONTRADO", 404);
        }
        res.send(user)
        }
    catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_USUARIO", 403);
    }
}


/**
 * Actualizar un usuario
 * 
 * @param {*} req 
 * @param {*} res 
 */

const updateUser = async (req, res) => {
    // Extraemos solo los datos validados
    req = matchedData(req)
    const {id,...body} = req;
    try {
        // Añadimos el objeto de configuración { new: true }
        const user = await userModel.findByIdAndUpdate(id,body,{ new: true});
        if (!user) {
            return handleHttpError(res, "USUARIO_NO_ENCONTRADO", 404);
        }
        return res.status(200).json({ // Cambiado a 200 porque es una actualización, no creación
            status: "success",
            msg: "Usuario actualizado correctamente",
            user
        });
        
    } catch (e) {
        console.log(e); // Importante para debuguear
        handleHttpError(res, "ERROR_AL_ACTUALIZAR_USUARIO", 500);
    }
}

/**
 * Eliminar un usuario
 * 
 * @param {*} req 
 * @param {*} res 
 */

const deleteUser = async(req,res)=>{
    
    try {

        req = matchedData(req);
    
        const {id} = req;
    
        const user = await userModel.deleteOne(id);
        if (!user) {
            return handleHttpError(res, "USUARIO_NO_ENCONTRADO", 404);
        }
        
        return res.send({
            status: "success",
            message: "Usuario eliminado correctamente",
            user
        })
        }
    catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_AL_ELIMINAR_USUARIO", 403);
        }
}

/**
 * Exportar las funciones del controlador
 * 
 */

const loginUser = async(req,res)=>{

    
    try {
        req = matchedData(req);
        const user = await userModel.findOne({email: req.email}).select("username email password role");
        if(!user){
            handleHttpError(res, "USUARIO_NO_EXISTE", 404);
            return;
        }
        const hashPassword = user.get("password");
        const check = await compare(req.password, hashPassword);
        if(!check){
            handleHttpError(res, "PASSWORD_INCORRECTO", 401);
            return;
        }
        user.set("password", undefined, { strict: false });
        const token = await tokenSign(user);


        return res.status(200).json({
            status: "success",
            message: "Inicio de sesión exitoso",
            user:{
                id: user._id,
                usernmame: user.username,
                email: user.email,
                role: user.role,
            },
            token
        });        
    } catch (error) {
        handleHttpError(res, "ERROR_AL_INICIAR_SESION", 403);
    }   
}


module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
    loginUser
}