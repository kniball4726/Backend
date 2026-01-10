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

const compare = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};

module.exports = { encrypt, compare };