const bcrypt = require('bcryptjs');

/** 
 * Encriptar una contraseña
 * 
 * @param {string} password 
 * @returns {string} hash
 */

const encrypt = async(password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash; 
};

/**
 * Comparar una contraseña con un hash
 * 
 * @param {*} password 
 * @param {*} hash 
 * @returns 
 */

const compare = async(password, hash) => {
    return await bcrypt.compare(password, hash);
};

module.exports = { encrypt, compare };