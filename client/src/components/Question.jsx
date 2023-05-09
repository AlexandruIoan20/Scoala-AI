import React from "react";

const Question = ({ summary, details }) => { 
    return ( 
        <details>
            <summary> { summary } </summary>
            <p> { details } </p>
        </details>
    )
}; 

export default Question; 