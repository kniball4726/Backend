const {matchedData} = require('express-validator');
const {encrypt, compare} = require('../utils/handlePassword');
const {userModel} = require('../models');
const { tokenSign, verifyToken } = require('../utils/handlerJwt');
const handleHttpError = require('../utils/handleError');

/**
 * Controlador encargado del registro de usuarios
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

const registerCtrl = async(req,res)=>{
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
        res.send({data});  
          
    } catch (error) {
        console.log(error);
        handleHttpError(res, "ERROR_AL_CREAR_USUARIO", 403);
    }
       
}

/**
 * Controlador encargado del login de usuarios
 * @param {*} req 
 * @param {*} res 
 */

const loginCtrl = async(req,res)=>{
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
        const data = {
            token: await tokenSign(user),
            user
        }
        return res.status(200).send({data});        
    } catch (error) {
        handleHttpError(res, "ERROR_AL_INICIAR_SESION", 403);
    }       
}


module.exports = {
    loginCtrl,
    registerCtrl
}