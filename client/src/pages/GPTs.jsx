import React, { useState, useEffect } from "react";
import fetchData from "../../helpers/fetchData";
import { NavLink } from "react-router-dom";
const GPTs = () => { 
    const [gpts, setGpts] = useState([])
    useEffect( () => {
        const renderData = async () => { 
            const res = await fetchData("http://localhost:3000/api/gpts"); 
            await setGpts(res.gpts); 
            console.log(gpts); 
        }; 

        renderData(); 
     }, [])
    return ( 
        <section className="gpts-page page">
            {gpts.map(gpt => { 
                return( 
                    <div key = { gpt._id }>
                        <p> { gpt.title } </p>
                        <NavLink to = {{ pathname: `/gpts/${gpt._id}` }}>Vezi</NavLink>
                    </div>
                )
            })}
        </section>
    )
}; 

export default GPTs;