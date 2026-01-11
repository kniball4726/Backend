const {Schema, model, version} = require('mongoose');
const moongooseDelete = require('mongoose-delete');


/**
 * Definicion del esquema y modelo de Usuario
 * @module models/Users
 * @return {Object} - Modelo de Usuario
 */
const logSchema = new Schema(
    {
        username: {type: String,required: true},
        action: {type: String,required: true},
        module: {type: String,required: true}
        
    },
        { 
            timestamps: true,
            versionKey: false
        }
);

logSchema.plugin(moongooseDelete, {overrideMethods: 'all'});
const Log = model('Log', logSchema, 'logs');

module.exports = Log;