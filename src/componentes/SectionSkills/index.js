import React from "react";
import './style.css';

export default function SectionSkills(){
    return(
        <div className="container-skills">
            <div>        
                <h1 className="titulo-skill">Soft Skills</h1>
                <ul>
                    <li className="skill">Comunicação</li>
                    <li className="skill">Flexibilidade e resiliência</li>
                    <li className="skill">Trabalho em equipe</li>
                    <li className="skill">Disciplina</li>
                    <li className="skill">Empatia</li>
                </ul>
            </div>
            <div>
                <h1 className="titulo-skill">Tecnologias</h1>
                <ul>
                    <li className="skill">HTML</li>
                    <li className="skill">CSS</li>
                    <li className="skill">JavaScript</li>
                    <li className="skill">React</li>
                    <li className="skill">React Native</li>
                    <li className="skill">Rest</li>
                    <li className="skill">Node.js</li>
                    <li className="skill">Git/GitHub</li>
                </ul>
            </div>
        </div>
    )
}