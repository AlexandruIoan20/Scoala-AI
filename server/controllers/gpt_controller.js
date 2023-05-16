const GPT = require("../models/gpt"); 
const upload = require("../middleware/upload_multer"); 
const fs = require("fs");

exports.gpt_list = async (req, res, next) => { 
    try { 
        const gpts = await GPT.find({}, { title: 1 }).exec(); 
        res.json({ gpts: gpts }); 
    } catch(err) { 
        console.log(err); 
        res.json({ gpts: undefined, error: err});
    }   
}; 

exports.gpt_detail = async (req, res, next) => { 
    try { 
        const gpt = await GPT.findById(req.params.id).exec(); 
        res.json( { gpt: gpt }); 
    } catch(err) { 
        console.log(err); 
        res.json( { gpt: undefined, error: err}); 
    }
};  

exports.gpt_create_get = (req, res, next) => { 
    res.send("Hello"); 
}; 

exports.gpt_create_post = (req, res, next) =>{ 
    upload(req, res, (err) => { 
        if(err) console.log(err); 
        else { 
            const newGPT = new GPT({ 
                title: req.body.title, 
                description: req.body.description, 
                usability: req.body.usability, 
                homeLink: req.body.homeLink, 
                apiDocs: req.body.apiDocs, 
            });

            if (req.files) { 
                const dataFiles = []; 
                const files = req.files;
                files.forEach(file => { 
                    dataFiles.push(fs.readFileSync(`../uploads/${files[files.indexOf(file)].filename}`)); 
                }); 

                newGPT.photo = {
                    data: dataFiles, 
                    contentType: "image/png", 
                }; 
            }
            
            newGPT.save().then(() => res.send({ gpt: newGPT, message: "Successfully uploaded"}))
                        .catch(err => console.log(err)); 
        }
    }); 
}
