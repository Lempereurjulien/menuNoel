import React from 'react';
import "../Style/AperetifComponent-style.css";

const INGREDIENT =[
    "chips de crevette",
    "tortillas et guacamole",
    "tomate cerise",
    "gressin",
    "champagne"
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
        <h2 className="h2">Les apéritifs</h2>
            <ul className="ul">
                {apero}
            </ul>
        </div>
    )
}

export default AperitifComponent;