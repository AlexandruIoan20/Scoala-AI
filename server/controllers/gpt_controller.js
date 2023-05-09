const GPT = require("../models/gpt"); 

exports.gpt_list = async (req, res, next) => { 
    try { 
        const gpts = await GPT.find({}).exec(); 
        res.json({ gpts: gtps }); 
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