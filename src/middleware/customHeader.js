const customHeader = (req, res, next) => {  

    try {
        const api_key = req.headers.api_key;

        if (api_key === 'gregory123') {
            console.log("API Key correcta");
            next();
        } else {
            console.log("API Key incorrecta");
            res.status(403).send("Forbidden: API Key incorrecta");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el middleware de customHeader");
    }
    
};

module.exports = customHeader;