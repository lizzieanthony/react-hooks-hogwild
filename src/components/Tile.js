import { useState } from "react";
import hogs from "../porkers_data";

const Tile = (props) => {
    const [isActive, setActive] = useState("true");

    const clickHandler = () => {
        setActive(!isActive);
    }

    return (
        <div className="pigTile pigTileSize" onClick={clickHandler}>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name}/>
            <div className={isActive ? "inactive" : "active"}>
                <p>Specialty: {props.specialty} </p>
                <p>Weight: {props.weight} lbs</p>
                <p>Greased?: {props.greased ? "true" : "false"}</p>
                <p>Highest Medal: {props.medal}</p>
            </div>
        </div>
    )
}

export default Tile; 