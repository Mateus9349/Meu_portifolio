import React from "react";
import { Link } from "react-router-dom";
import './style.css';

export default function NavBar(){
    return(
        <header className="nav-bar">
            <div className="div-logo">
                <Link to='/'><img src="assets/img/logo.png" className="logo" alt="logo de engenharia da computação"/></Link>
            </div>
            <nav className="nav">
                <Link className="link" to='/cursos' >Cursos</Link>
                <Link className="link" to='/estagios' >Estagios</Link>
                <Link className="link" to='/projetos' >Projetos</Link>
            </nav>    
        </header>
    )
}