import React from 'react';
import "../Style/TitleComponent-style.css";
const TitleComponent = (props) => {
    return (
        <div>
            <h1 className="title">Noël {props.date}</h1>
            <h2 className="text">{props.lieu}  ({props.personnes} personnes)</h2>
        </div>
    )
}

export default TitleComponent;

