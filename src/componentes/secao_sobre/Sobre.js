import React from "react";
import foto from '../../img/Foto_curriculo2.jpg'
import './style.css'

export default function Sobre(){
    return(
        <section className="sobre">
            <img className="foto" src={foto} />

            <div className="info-pessoal">
                <h1>Mateus Vinicius Passos de Lima</h1>
                <h2><span className="item">Nascimento:</span> 06/05/199</h2>
                <h2><span className="item">Estado civil:</span> Solteiro</h2>
                <h2><span className="item">Nacionalidade:</span> Brasileiro</h2>
                <h2><span className="item">Contato:</span> (92) 98254-1621</h2>
                <h2><span className="item">E-mail:</span> mateusvpdl@outlook.com</h2>
            </div>
        </section>
    )
}