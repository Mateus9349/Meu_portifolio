import React from "react";
import './style.css'

export default function Card(props){
    return(
        <section className="card">
            <div className="container-img">
                <img className="img" src={props.imagem1} alt={props.titulo}/>
                <img className="img" src={props.imagem2} alt={props.titulo}/>
                <img className="img" src={props.imagem3} alt={props.titulo}/>
                <img className="img" src={props.imagem4} alt={props.titulo}/>
            </div>
            <div className="container" >
                <h2 className="titulo">{props.titulo}</h2>
                <p className="texto" >{props.texto}</p>
            </div>
        </section>
    )
}