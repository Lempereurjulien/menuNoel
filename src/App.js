import './App.css';
import React from "react";
import TitleComponent from "./component/TitleComponent";
import AperitifComponent from "./component/AperitifComponent";
import PlatPrincipalComponent from "./component/PlatPrincipalComponent";
import FromageComponent from "./component/FromageComponent";
import DessertComponent from "./component/DessertComponent";
import pereNoel from "./asset/pereNoel.png";
function App() {
    return (
        <div className="App">
            <TitleComponent date="2023" lieu="Aubagne" nb={18}/>
            <div className="separation1"/>
            <div className="content">
                <AperitifComponent/>
                {/*<div className="separation1"/>*/}
                <PlatPrincipalComponent/>
                {/*<div className="separation2"/>*/}
                <FromageComponent/>
                {/*<div className="separation1"/>*/}
                <DessertComponent/>
            </div>
            <div className="separation1"/>
            <div className="imageDiv">
                <img src={pereNoel} alt="pere noël" className="image"
                />
            </div>
        </div>
    );
}

export default App;
