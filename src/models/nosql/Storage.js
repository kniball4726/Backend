const {Schema, model} = require('mongoose');


/**
 * Definicion del esquema y modelo de Usuario
 * @module models/Users
 * @return {Object} - Modelo de Usuario
 */
const storageSchema = new Schema(
    {
        filename: {
            type: String, 
            required: true
        },
        url: {
            type: String, 
            required: true
        }
    },
        { 
            timestamps: true,
            versionKey: false
        }
);


const Storage = model('Storage', storageSchema, 'storages');

module.exports = Storage;