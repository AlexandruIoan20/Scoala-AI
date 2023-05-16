const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const GPTSchema = new Schema({ 
    title: { type: String, minLength: 1, required: true }, 
    description: { type: String, minLength: 1, required: true }, 
    usability: [{ type: String, minLength: 1, required: true }], 
    homeLink: { type: String, minLength: 1, required: true }, 
    apiDocs: { type: String, minLength: 1, required: true }, 
    photo: { 
        data: [ Buffer ],
        contentType: String, 
    }, 
}); 

module.exports = mongoose.model("GPT", GPTSchema); 
