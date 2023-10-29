import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Join.css";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ll3ry9s",
        "template_y5dqg4j",
        form.current,
        "Hm1UAGuiuth73YXus"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">PRONTO PARA</span>
          <span>O SEU CORPO</span>
        </div>
        <div>
          <span>SUBIR DE NÍVEL</span>
          <span className="stroke-text">COM A GENTE?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container">
          <input
            ref={form}
            onSubmit={sendEmail}
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Coloque seu e-mail"
          />
          <button className="btn btn-j">Junte-se</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
