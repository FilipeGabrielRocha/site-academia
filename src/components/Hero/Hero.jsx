import React from "react";
import './Hero.css'

import Header from "../Header/Header";

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <div></div>
                    <span>A melhor academia da cidade</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Molde </span>
                        <span>Seu</span>
                    </div>
                    <div>
                        <span>Corpo ideal</span>
                    </div>
                    <div>
                        <span>Aqui nós vamos ajudar você a moldar e construir o seu corpo ideal e viver sua vida ao máximo</span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Treinadores Experientes</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>Membros Ingressados</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Programas Fitness</span>
                    </div>
                </div>
            </div>
            <div className="right-h">right side</div>
        </div>
    )
}

export default Hero