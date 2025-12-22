const express = require('express');
const controllerStorage = require('../controllers/storage')
const router = express.Router();
const handleStorage = require('../utils/handleStorage')


router.post("/", handleStorage.single('myfile'), controllerStorage.uploadFile);

module.exports = router