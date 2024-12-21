import React from 'react';
import "../Style/EntreesComponent-style.css";

const INGREDIENT =[
    "Chips de crevette",
    "Tortillas et guacamole",
    "Tomate cerise",
    "Gressin",
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