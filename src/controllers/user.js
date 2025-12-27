const { matchedData } = require('express-validator');
const {userModel} = require('../models');
const handleHttpError = require('../utils/handleError');

/**
 * Crear un usuario
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createUser = async(req,res)=>{

    //Recoger datos del body
    req = matchedData(req);
    const params = req;

        //Crear el objeto a guardar
        try {
                 //Crear el objeto usuario a guardar
                const user = await userModel.create(params);

                return res.status(201).json({
                    status: "success",
                    msg: "Usuario creado correctamente",
                    user
                });
                
            } catch (e) {
                console.log(e);
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
    req=matchedData(req);
    const {id}=req;
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
        const user = await userModel.findByIdAndUpdate(
            id, 
            body, 
            { new: true} 
        );
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
    
    req = matchedData(req);
    
    const {id} = req;
    
    try {
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


module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
}