import React from "react";
import './style.css'

export default function Footer(){
    return(
        <footer>
            <a href="#">
                <img className="icon" src="assets\img\linkedin.png"/>
            </a>
            <a href="#">
                <img className="icon" src="assets/img/github.png"/>
            </a>
            <a href="#">
                <img className="icon" src="assets/img/instagram.png" />
            </a>
        </footer>
    )
}