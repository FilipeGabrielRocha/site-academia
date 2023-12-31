import React, { useState } from "react";
import { Link } from "react-scroll";

import "./Header.css";

import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: ".5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to={"home"}
              span={true}
              smooth={true}>Home</Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to={"programs"}
              span={true}
              smooth={true}>Programas</Link>
          </li>
          <li>
            <Link 
            onClick={() => setMenuOpened(false)} 
            to={"reasons"} 
            span={true} 
            smooth={true}>Por que nós</Link>
          </li>
          <li>
            <Link 
            onClick={() => setMenuOpened(false)} 
            to={"plans"} 
            span={true}
            smooth={true}>Planos</Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to={"testimonials"}
              span={true}
              smooth={true}>Depoimentos</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
