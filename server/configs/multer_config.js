const multer = require("multer"); 

const Storage = multer.diskStorage({ 
    destination: "create", 
    filename: (req, file, cb) => { 
        cb(null, file.originalname); 
    }
}); 

const upload = multer({ 
    storage: Storage, 
}).single('gptImage'); 

module.exports = { 
    Storage, 
    upload, 
}