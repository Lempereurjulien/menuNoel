import React from 'react';
import "../Style/EntreesComponent-style.css";

const ENTREES = [
    "Saumon (accompagné de son pain de seigle)",
    "Huitre",
    "Escargots",
    "Foie Gras",
]

const EntreesComponent = () => {
    const entrees = ENTREES.map( (entre) => {
        return (
            <li className='entrees'>
                {entre}
            </li>
        )
    }) 

    return(
        <div className='contentEntrees'>
            <h2 className='title'>Les Entrées</h2>
            <ul className='listEntrees'>
                {entrees}
            </ul>
        </div>
    )
}

export default EntreesComponent;