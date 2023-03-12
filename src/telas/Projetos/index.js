import React from "react";
import Footer from "../../componentes/footer/Footer";
import NavBar from "../../componentes/navbar/NavBar";
import CardProjeto from "../../componentes/CardProjeto";


import  imagem1 from'../../img/estagio_camara01.jpeg'
import  imagem2 from'../../img/estagio_camara02.jpeg'
import  imagem3 from'../../img/estagio_camara03.jpeg'
import  imagem4 from'../../img/estagio_camara04.jpeg'

const images = [imagem1, imagem2, imagem3, imagem4];

export default function Projetos(){
    return(
        <>
            <NavBar/>
            <CardProjeto
            images = {images}
            titulo = 'Nome do projeto'
            informacoes = 'Informações do Projeto'
            />
            <Footer/>
        </>
    )
}