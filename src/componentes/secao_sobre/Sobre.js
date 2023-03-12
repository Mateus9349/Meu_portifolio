import React from "react";
import './style.css'

export default function Sobre(){
    return(
        <section className="sobre">
            <img className="foto" src="assets/img/Foto_curriculo.jpg" />
            <div className="container-sobre">
                <h1>Olá, meu nome é Mateus Vinicius</h1>
                <h2>Sou formando em Engenharia da Computação</h2>
                <p>Preparei este portifolio para compartilhar meu aprendizado durantes estes anos de formação!</p>
            </div>
        </section>
    )
}