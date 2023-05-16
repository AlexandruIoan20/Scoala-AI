const express = require("express"); 
const router = express.Router(); 
const path = require("path"); 
const multer = require("multer");

const GPT = require("../models/gpt"); 

const home_controller = require("../controllers/home_controller"); 
const gpt_controller = require("../controllers/gpt_controller"); 

router.get("/", home_controller.home_index); 

router.get("/gpts/create", gpt_controller.gpt_create_get); 
router.post("/gpts/create", gpt_controller.gpt_create_post); 

router.get("/gpts", gpt_controller.gpt_list); 
router.get("/gpts/:id", gpt_controller.gpt_detail); 


module.exports = router; 

