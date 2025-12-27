const fs = require('fs')
const {matchedData} = require('express-validator')
const handleHttpError = require('../utils/handleError')
const {storageModel} = require('../models')
const config = require('../config/config')
const public_url = config.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`


/**
 * Crear un recurso de almacenamiento
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async(req, res)=>{
    const {body,file} = req;
    const fileData = {
        filename:file.filename,
        url:`${public_url}/${file.filename}`
    }

    const data = await storageModel.create(fileData);


    return res.status(200).send({data})
}

/**  
 * Listar recursos de almacenamiento
 * 
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async(req,res)=>{
    try {
        const items = await storageModel.find();
        if (items.length === 0) {
            return handleHttpError(res, "NO_HAY_RECURSOS", 404);
        }
        return res.status(200).json({
            status: "success",
            items
        });
    } catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_RECURSOS", 403);
    }

}   


/**
 * Mostrar un recurso de almacenamiento
 * 
 * @param {*} req 
 * @param {*} res 
 */

const getItem = async(req,res)=>{
        req=matchedData(req);
        const {id}=req;
        try {
            const item = await storageModel.findById(id);
            console.log(item);
            if (!item) {
                return handleHttpError(res, "ITEM_NO_ENCONTRADO", 404);
            }
            return res.status(200).send(item)
            }
        catch (e) {
            handleHttpError(res, "ERROR_AL_OBTENER_ITEM", 403);
        }
    }


/**
 * Actualizar un recurso de almacenamiento
 * 
 * @param {*} req 
 * @param {*} res 
 */

const updateItem = async (req, res) => {
    // Extraemos solo los datos validados
    req = matchedData(req)
    const {id,...body} = req;
    try {
        // Añadimos el objeto de configuración { new: true }
        const item = await storageModel.findByIdAndUpdate(
            id, 
            body, 
            { new: true} 
        );
        if (!item) {
            return handleHttpError(res, "RECURSO_NO_ENCONTRADO", 404);
        }
        return res.status(200).json({ // Cambiado a 200 porque es una actualización, no creación
            status: "success",
            msg: "Recurso actualizado correctamente",
            item
        });
        
    } catch (e) {
        console.log(e); // Importante para debuguear
        handleHttpError(res, "ERROR_AL_ACTUALIZAR_RECURSO", 500);
    }
}

/**
 * Eliminar un recurso de almacenamiento
 * @param {*} req 
 * @param {*} res 
 */


const deleteItem = async(req,res)=>{
    
    
    try {
        req = matchedData(req);
    
        const {id} = req;
    
        const item = await storageModel.deleteOne(id);
        if (!item) {
            return handleHttpError(res, "RECURSO_NO_ENCONTRADO", 404);
        }
        return res.status(200).json({
            status: "success",
            message: "Recurso eliminado correctamente",
            item
        })
        }
    catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_AL_ELIMINAR_RECURSO", 403);
        }
}

module.exports = {
    createItem,
    getItems,
    getItem,
    updateItem,
    deleteItem
}