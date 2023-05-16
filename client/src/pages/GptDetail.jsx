import React, { useState, useEffect } from "react";
import fetchData from "../../helpers/fetchData";
import { useLocation } from "react-router-dom";
import { Buffer } from "buffer"; 
import generateRandomKey from "../../helpers/generateKey";

const GptDetail = () => { 
    const location = useLocation(); 
    const [gpt, setGpt] = useState({}); 
    const [ images, setImages ] = useState([]);  
    const [ pageLoaded, setPageLoaded ] = useState(false); 

    const formatImages = (array) => { 
        const result = []; 
            array.forEach(dataBuffer => { 
                const base64image = Buffer.from(dataBuffer.data, 'base64').toString("base64"); 
                result.push(`data:image/jpeg;base64,${base64image}`); 
            }); 
        

        return result; 
    }

    useEffect( () => { 
        const renderData = async () => { 
            const res = await fetchData(`http://localhost:3000/api/${location.pathname}`); 
            await setGpt(res.gpt); 
            console.log(res.gpt); 
            setImages(formatImages(res.gpt.photo.data)); 
            setPageLoaded(true); 
        }

        renderData (); 
    }, []); 
    return( 
        <section className="detail-page page">
            { !pageLoaded && 
                <p className="first"> Incarcare </p>
            }
            { !pageLoaded && 
                <>
                    <p> { gpt.title } </p>
                    { images.map(image => { 
                        return (
                            <img src= { image } key = { generateRandomKey(20)} alt="X" />
                        )
                    })}

                    <p> { gpt.description } </p>
                    <hr />
                    <p> { gpt.usability } </p>

                    <p> Pentru a accesa pagina principala apasa <a href= { gpt.homeLink }> aici </a></p>
                    <p> Pentru a vedea mai multe detalii despre AI apasa <a href= { gpt.apiDocs }> aici </a>
                    </p>
                </>
            }
        </section>
    )
}; 

export default GptDetail;