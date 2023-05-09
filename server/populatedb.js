const express = require("express"); 
const mongoose = require("mongoose"); 

const GPT = require("./models/gpt"); 

console.log("Start creating GPTs"); 

const mongodb = "mongodb+srv://admin:Husi2015@cluster0.jujegcr.mongodb.net/scoala_ai?retryWrites=true&w=majority"; 
mongoose.set("strictQuery", false); 

const gpts = []; 

main().catch(err => console.log(err)); 

async function main () { 
    console.log("We are going to create the GPTs");
    await mongoose.connect(mongodb); 
    console.log("Should be connected"); 
    await createGPTs(); 
    console.log("Done, closing mongoose"); 
};  

async function gptCreate(title, description, usability,  homeLink, apiDocs) { 
    const gpt_detail = { 
        title, 
        description, 
        usability, 
        homeLink, 
        apiDocs,  
    }; 

    const gpt = new GPT(gpt_detail); 
    await gpt.save(); 
    console.log("GPT CREATED") ;
    gpts.push(gpt); 
};

async function createGPTs () { 
    Promise.all( 
        [
            gptCreate("Chat GPT", 
                `GPT-3 este un sistem de inteligență artificială (AI) creat de OpenAI, un laborator 
                de cercetare cu sediul în San Francisco. Cu capacitatea sa de a genera text asemănător omului, 
                GPT-3 a devenit unul dintre cele mai discutate progrese în tehnologia AI.1`, 

                [`Este o aplicație software concepută pentru a imita o conversație de tip uman pe baza indicațiilor utilizatorului.
                 La numai o săptămână de la lansare, peste un milion de utilizatori testaseră deja ChatGPT, potrivit lui Sam Altman,
                  cofondator și director executiv al OpenAI, scrie euronews.com.`], 

                `https://openai.com/blog/chatgpt`, 
                `https://openai.com/about`, 
                false, 
            ), 

            gptCreate(
                "Amazon Alexa", 
                `Pe scurt, Alexa este sistemul de control vocal lansat de catre compania Amazon in 2014,
                 alaturi de boxa Echo. In scurt timp, aceasta a reusit sa cucereasca inimile pasionatilor de tehnologie din intreaga lume.
                  De ce? Iata cateva dintre cele mai interesante lucruri pe care le poate realiza Alexa:`, 

                [`Organizeaza activitatea zilnica
                Fie ca este vorba despre adaugarea evenimentelor in calendar sau crearea unei liste de cumparaturi,
                 Alexa functioneaza cu succes ca si un asistent personal. Nu o sa mai ratezi nicio programare la dentist si nici nu o sa te 
                 intorci acasa de la cumparaturi cu jumatate din lucrurile de care aveai nevoie.`, 
                
                
                `Te tine informat
                Alexa, care sunt ultimele stiri? Sau Alexa, cum va fi prognoza meteo in weekend? 
                Simplu si rapid, afli tot ce te intereseaza.`, 
                
                
                `Socoteste in locul tau
                Daca te afli in situatia mea si matematica nu este punctul tau forte, o poti ruga pe Alexa sa te ajute. 
                Care este valoarea lui Pi sau cat este radical din 70 sunt intrebari la care Alexa raspunde fara sa se gandeasca prea 
                mult.`],

                `https://alexa.amazon.com/`, 
                `https://developer.amazon.com/en-US/docs/alexa/documentation-home.html`, 
                false
            ), 
        ]
    )
}

