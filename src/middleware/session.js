const { matchedData } = require("express-validator")
const handleHttpError = require("../utils/handleError")
const { verifyToken } = require("../utils/handlerJwt")

const authMiddleware = async(req, res, next) => {
    try { 
        req = matchedData(req)

        if(!req.headers){
            handleHttpError(res, "NO_HEADERS", 401)
            return
        } 
        const head = req?.headers?.authorization
        if(!head){
            handleHttpError(res, "NO_TOKEN", 401)
            return
        }
        
        const token = head.split(" ").pop()
        console.log(token)
        const dataToken = await verifyToken(token)
        console.log(dataToken)
        if(!dataToken._id){
            handleHttpError(res, "ERROR_TOKEN_ID", 401)
            return
        }
        next()
    } catch (error) {
        console.log(error)
        handleHttpError(res, "ERROR_DE_AUTENTICACION", 401)
    }
    next()
}


module.exports = authMiddleware