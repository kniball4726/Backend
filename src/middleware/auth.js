const handleHttpError = require("../utils/handleError")
const config = require("../config/config")
const jwt = require("jwt-simple")
const moment = require("moment")
const JWT_SECRET = config.JWT_SECRET
const {userModel} = require("../models")

const authMiddleware = async(req, res, next) => {
      try {
        if(!req.headers.authorization){
            handleHttpError(res, "NO_TOKEN_PROVIDED", 403)
            return
        }
        const token = req.headers.authorization.replace(/['"]+/g, '');
        
        if(!token){
            handleHttpError(res, "NO_TOKEN_CREATED", 403)
            return
        }

      
            const payload = jwt.decode(token, JWT_SECRET)
            if(payload.exp <= moment().unix()){
                handleHttpError(res, "TOKEN_EXPIRED", 401)
                return
            }

            req.user = payload

        } catch (error) {
            handleHttpError(res, "ERROR_DE_AUTENTICACION", 401) 
        }
        
        const user = await userModel.findById(req.user.id)
        req.user = user
        if(!user){
            handleHttpError(res, "USUARIO_NO_ENCONTRADO", 404)
            return
        }
        next()
}


module.exports = authMiddleware