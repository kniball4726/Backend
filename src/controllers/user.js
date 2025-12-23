const {userModel} = require('../models');

/**
 * Crear un usuario
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createUser = async(req,res)=>{

    //Recoger datos del body
    let params = req.body;

        //Crear el objeto a guardar
        try {
                 //Crear el objeto usuario a guardar
                const user =  new userModel(params);
                await user.save()

                return res.status(201).json({
                    status: "success",
                    msg: "Usuario creado correctamente"
                });
                
            } catch (error) {
                console.log(error);
                return res.status(500).json({
                    status: "error",
                    msg: "Error al guardar el usuario"
                });
            }

}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const readAll = async(req,res)=>{
    try {
        const users = await userModel.find();
        return res.status(200).json({
            status: "success",
            users
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: "Error al listar los usuarios",
            error: error.message
        });
    }

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

const deleteOneUser = (req,res)=>{
    res.send("Eliminar un usuario por id")
}

module.exports = {
    readAll,
    createUser,
    readOne,
    updateUser,
    deleteUser,
    deleteOneUser
}