const  handleHttpError = require("../utils/handleError")
/**
 * Pasar array con los roles permitidos
 * @param {*} roles 
 * @returns 
 */

const handleError = require("../utils/handleError");

const roleMiddleware = (roles) => (req, res, next) => {
    try {
    const { user } = req;
    const rolesByUser = user.role;
    const checkvaluerol = roles.some((rolSingle) => rolesByUser.includes(rolSingle));
        
    if (!checkvaluerol) {
        handleError(res, "NO_TIENES_PERMISOS", 403);
        return;
    }
    next();

    } catch (error) {
        handleError(res, "ERROR_DE_AUTORIZACION", 403);
        return;
    }
  
};

module.exports = roleMiddleware;