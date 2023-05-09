const GPT = require("../models/gpt"); 
const { body, validationResult } = require("express-validator"); 
const multer = require("multer"); 
const { Storage, upload } = require("../configs/multer_config"); 

exports.gpt_list = async (req, res, next) => { 
    try { 
        const gpts = await GPT.find().exec(); 
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

exports.gpt_create_post = [ 
    body("title", "Title is required")
        .trim() 
        .isLength({ min: 1 }) 
        .escape(),
    body("description", "Description is required")
        .trim() 
        .isLength({ min: 1 }) 
        .escape(), 
    body("usability.*", "Usability is required")
        .trim() 
        .isLength({ min: 1}) 
        .escape(), 
    body("homeLink", "homeLink is required")
        .trim() 
        .isLength({ min: 1}) 
        .escape(), 
    body("apiDocs", "api is required")
        .trim() 
        .isLength({ min: 1}) 
        .escape(), 
    body("photo.*.data") 
        .notEmpty(),

    (req, res, next) => { 
        upload(req, res, async (err) => { 
            if(err) console.log(err); 
            else { 
                const errors = validationResult(req); 
                if(!errors.isEmpty()) { 
                    res.status(403).json({ errors: errors.array() })
                } else { 
                    const newGPT = new GPT({ 
                        title: req.body.title, 
                        description: req.body.description, 
                        usability: req.body.usability, 
                        homeLink: req.body.homeLink, 
                        apiDocs: req.body.apiDocs, 
                        imageName: "gptImage", 
                        photo: { 
                            data: req.body.data, 
                            contentType: "jpeg", 
                        }
                    }); 

                    await newGPT.save(); 
                    res.status(200).json({ gpt: newGPT, message: "GPT added"}); 
                }
            }
        })
    }
]
