const userSchema = require('../models/users');

const createUser = (req,res)=>{
    const user = userSchema.create(req.body);
    user
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message: error}));
}


const readAll = (req,res)=>{
    res.send("Mostrar usuarios")
}


const readOne = (req,res)=>{
    res.send("Mostrar un usuario")
}

const updateUser = (req,res)=>{
    res.send("Actualizar un usuario")
}

const deleteUser = (req,res)=>{
    res.send("Eliminar un usuario")
}
module.exports = {
    readAll,
    createUser,
    readOne,
    updateUser,
    deleteUser
}