const { matchedData } = require('express-validator');
const {userModel} = require('../models');
const handleHttpError = require('../utils/handleError');

/**
 * Crear un usuario
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createUser = async(req,res)=>{

    //Recoger datos del body
    let params = matchedData(req);

        //Crear el objeto a guardar
        try {
                 //Crear el objeto usuario a guardar
                const user = await userModel.create(params);
                //await user.save()

                return res.status(201).json({
                    status: "success",
                    msg: "Usuario creado correctamente",
                    user
                });
                
            } catch (e) {
                 handleHttpError(res, "ERROR_AL_OBTENER_USUARIOS", 403);
            }

}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getUsers = async(req,res)=>{
    try {
        const users = await userModel.find();
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
 * @param {*} req 
 * @param {*} res 
 */
const getUser = async(req,res)=>{
    req=matchedData(req);
    const {id}=req;
    try {
        const user = await userModel.findById(id);
        res.send(user)
        }
    catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_USUARIO", 403);
    }
}


/**
 * Actualizar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = async(req,res)=>{
    try {
       
    } catch (e) {
        handleHttpError(res, "ERROR_AL_ACTUALIZAR_USUARIO", 403);
    }
}

/**
 * Eliminar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = async(req,res)=>{
    
    req = matchedData(req);
    
    const {id} = req;
    
    try {
        const user = await userModel.deleteOne(id);
        return res.send({
            status: "success",
            message: "Usuario eliminado correctamente",
            user
        })
        }
    catch (e) {
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