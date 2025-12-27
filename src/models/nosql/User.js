const {Schema, model, version} = require('mongoose');
const moongooseDelete = require('mongoose-delete');


/**
 * Definicion del esquema y modelo de Usuario
 * @module models/Users
 * @return {Object} - Modelo de Usuario
 */
const userSchema = new Schema(
    {
        username: {type: String,required: true},
        dni: {type: Number,required: true,unique: true},
        email: {type: String,required: true,unique: true},
        password: {type: String,required: true},
        role: {type: ['user', 'admin'],required: true,default: 'user'},
        imagen: {type: String, default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"}
    },
        { 
            timestamps: true,
            versionKey: false
        }
);

userSchema.plugin(moongooseDelete, {overrideMethods: 'all'});
const User = model('User', userSchema, 'users');

module.exports = User;