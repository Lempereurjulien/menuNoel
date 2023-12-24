import React from 'react';
import "../Style/AperetifComponent-style.css";

const INGREDIENT =[
    "Saumon",
    "Huitres",
    "Escargots",
    "Foie Gras",
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
        <h2 className="h2">Les entrées :</h2>
            <ul className="ul">
                {apero}
            </ul>
        </div>
    )
}

export default AperitifComponent;