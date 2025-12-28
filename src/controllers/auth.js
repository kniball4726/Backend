const {matchedData} = require('express-validator');
const {encrypt, compare} = require('../utils/handlePassword');
const {userModel} = require('../models');
const { tokenSign } = require('../utils/handlerJwt');

/**
 * Crear un usuario
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */


const loginCtrl = async(req,res)=>{
    
    req = matchedData(req);
    const hash = await encrypt (req.password);
    const body = {...req, password: hash };
    const dataUser = await userModel.create(body);
    dataUser.set("password", undefined, { strict: false });
    const data = {
        token: await tokenSign(dataUser),
        user: dataUser
    }
    return res.status(201).send({data});   
}



module.exports = {
    loginCtrl
}