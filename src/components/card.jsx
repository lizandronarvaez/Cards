import React from "react";
import '../styles/cajas.css'

function Card(props) {
    return (
        <div className="ContainerText">
            <img src={require(`../pictures/${props.picture}`)} alt={props.altImagen}
                className="ContainerPicture"
            />
            <h5 className="ContainerTittle">{props.titulo}</h5>
            <p className="ContainerParrafo">{props.text}</p>
            <button type="button" class="buttonClick btn btn-primary" >Informacion</button>
        </div>
    )
}

export { Card }