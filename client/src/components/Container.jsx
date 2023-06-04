import React from "react";
import Card from "./Card/Card";
import style from "./Container.module.css";

const Container = ({ dogs }) => {
  return (
    <div className={style.containerAll}>
      {dogs.map((dog) => {
        return (
          <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.image}
            temperaments={dog.temperaments}
            weight={dog.weight}
          />
        );
      })}
    </div>
  );
};

export default Container;
