import React from "react";
import { PlantList } from "./plantlist";
import Plant from "./plantItem";
import "./exploreplants.css";

function Explore(){
    return (
        <div className="explore">
            <h1 className="Exploretitle"> Explore Plants</h1>
            <div className="plantList">
                {PlantList.map((plant,key) =>{
                 return (<Plant
                        key={key}
                            image ={plant.image}
                            name={plant.name} 
                            category={plant.category}
                        />
                );
            })};
            </div>
        </div>
    );
}

export default Explore;