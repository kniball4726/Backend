const server = require('./src/server/index')
const data = require('./src/data/mongo')

console.clear();
server();
data();