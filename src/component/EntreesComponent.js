import React from 'react';
import "../Style/EntreesComponent-style.css";

const INGREDIENT =[
    "Saumon",
    "Huitres",
    "Escargots",
    "Foie Gras",
]

const EntreesComponent = () =>{

    const apero = INGREDIENT.map((ing) =>{
        return(
            <li className="li">
                {ing}
            </li>
        )
    })
    return (
        <div className="entreesContent">
        <h2 className="h2">Les entrées</h2>
            <ul className="ul">
                {apero}
            </ul>
        </div>
    )
}

export default EntreesComponent;