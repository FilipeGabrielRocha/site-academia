import React from "react";
import { motion } from "framer-motion";

import "./Hero.css";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import Header from "../Header/Header";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth<=768 ? true : false

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "145px" : "190px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
            <span>
              Aqui nós vamos ajudar você a moldar e construir o seu corpo ideal
              e viver sua vida ao máximo
            </span>
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

        <div className="hero-buttons">
          <button className="btn">Comece</button>
          <button className="btn">Saiba Mais</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Junte-se Agora</button>

        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} alt="" />
          <span>Frequência Cardíaca</span>
          <span>116 bpm</span>
        </motion.div>

        <img className="hero-image" src={hero_image} alt="" />
        <motion.img
          className="hero-image-back"
          src={hero_image_back}
          alt=""
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />

        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calorias Queimadas</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
