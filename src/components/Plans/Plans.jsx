import React from "react";

import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container">
      <div
        className="programs-header"
        style={{
          gap: "2rem",
        }}
      >
        <span className="stroke-text">PRONTO PARA COMEÇAR</span>
        <span>SUA JORNADA</span>
        <span className="stroke-text">AGORA CONOSCO</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>R$ {plan.price}</span>

            <div className="features">
                {plan.features.map((feature, i) => (
                    <div className="feature">
                        <img src={whiteTick} alt="" />
                        <span key={i}>{feature}</span>
                    </div>
                ))}
            </div>

            <div>
                <span>Veja mais benefícios -> </span>
            </div>
            <button className="btn">Comece</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
