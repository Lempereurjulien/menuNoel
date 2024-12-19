import './App.css';
import React from "react";
import TitleComponent from "./component/TitleComponent";
import AperitifComponent from "./component/AperitifComponent";
import EntreesComponent from './component/EntreesComponent';
import PlatPrincipalComponent from "./component/PlatPrincipalComponent";
import FromageComponent from "./component/FromageComponent";
import DessertComponent from "./component/DessertComponent";

function App() {
    return (
        <div className="App">
            <div className='card'>
                <TitleComponent date="2023" lieu="Flayosc" personnes="15"/>
                <div className="separation1"/>
                    <div className="content">
                        <AperitifComponent/>
                        <EntreesComponent/>
                        <PlatPrincipalComponent/>
                        <FromageComponent/>
                        <DessertComponent/>
                    </div>
                <div className="separation1"/>
                <div className="imageDiv">
                    <img src={"https://res.cloudinary.com/dhwt4rlu3/image/upload/v1703380066/unqfcn3w43qy8wc94f5d.png"} alt="pere noël" className="image"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
