import React from 'react';
import "../Style/AperetifComponent-style.css";

const INGREDIENT =[
    "Chips de crevette",
    "Tortillas et guacamole",
    "Tomate cerise",
    "Gressin",
    
]

const AperitifComponent = () =>{

    const apero = INGREDIENT.map((ing) =>{
        return(
            <li className="li">
                {ing}
            </li>
        )
    })
    return (
        <div className="contentAperitif">
        <h2 className="h2">Les aperiritfs</h2>
            <ul className="ul">
                {apero}
            </ul>
        </div>
    )
}

export default AperitifComponent;