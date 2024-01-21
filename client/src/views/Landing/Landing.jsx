import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import DogLanding from "../../assets/img/Landing.png";

const Landing = () => {
  return (
    <div className={style.containerLanding}>
      <h1 className={style.titleLanding}>WOOF WOOF!</h1>
      <img src={DogLanding} className={style.landingImage} />
      <h5 className={style.description}>
        Discover the perfect app to locate your pet effortlessly. Gain valuable
        insights into your dog's world, from unique traits to essential care
        tips.
      </h5>
      <div>
        <button className={style.buttonLanding}>
          <Link to="/home" className={style.linkLanding}>
            HOME PAGE
          </Link>
        </button>
        <h5>© 2023 - Santiago Marich</h5>
      </div>
    </div>
  );
};

export default Landing;
