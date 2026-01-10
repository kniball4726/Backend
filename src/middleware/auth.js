const handleHttpError = require("../utils/handleError")
const { verifyToken } = require("../utils/handlerJwt")
const config = require("../config/config")
const jwt = require("jwt-simple")
const moment = require("moment")
const { matchedData } = require("express-validator")
const JWT_SECRET = config.JWT_SECRET

const authMiddleware = (req, res, next) => {
        if(!req.headers.authorization){
            handleHttpError(res, "NO_HEADERS_PROVIDED", 403)
            return
        }
        const token = req.headers.authorization.replace(/['"]+/g, '');
        if(!token){
            handleHttpError(res, "NO_TOKEN_PROVIDED", 403)
            return
        }

        try {
            const payload = jwt.decode(token, JWT_SECRET)
            if(payload.exp <= moment().unix()){
                handleHttpError(res, "TOKEN_EXPIRED", 401)
                return
            }

            req.user = payload

        } catch (error) {
            handleHttpError(res, "ERROR_DE_AUTENTICACION", 401) 
        }
        
        
        next()
}


module.exports = authMiddleware