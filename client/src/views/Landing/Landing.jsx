import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.containerLanding}>
      <h1>Woof-Woof!</h1>
      <h5 className={style.description}>
        Esta es la aplicacion perfecta para encontrar a tu mascota. Aprenderas
        todo sobre tu perro
      </h5>
      <div>
        <button className={style.buttonLanding}>
          <Link to="/home" className={style.linkLanding}>
            INGRESAR
          </Link>
        </button>
        <h5>© 2023 - Santiago Marich</h5>
      </div>
    </div>
  );
};

export default Landing;
