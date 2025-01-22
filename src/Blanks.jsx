import React from "react";
import "./Blanks.css"

export default function Blanks(props){

    const upperValue=props.value.toUpperCase();
    return (
        
         <div className="blanks">
            {props.isHeld && <p>{upperValue}</p>}
        </div>
       
    )
}