import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailDogs } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.selectedDog);

  useEffect(() => {
    dispatch(getDetailDogs(id));
  }, [dispatch, id]);

  const temperaments = dog
    ? dog.temperaments
        .map((temperament) => temperament.name || temperament)
        .join(" ")
    : "";

  return (
    <div>
      {dog ? (
        <div className={style.detailContainer}>
          <img src={dog.image} alt="Dog" className={style.detailImage} />
          <h2 className={style.detailName}>{dog.name}</h2>
          <h5 className={style.height}>Height: {dog.height} cm</h5>
          <h5 className={style.weight}>Weight: {dog.weight} kg</h5>
          <h5 className={style.lifespan}>LifeSpan: {dog.life_span}</h5>
          <h5 className={style.temperamentsTitle}>TEMPERAMENTS</h5>
          <h5 className={style.temperamentsContent}>{temperaments}</h5>
          <Link to="/home" className={style.linkClose}>
            <button className={style.buttonClose}>BACK TO HOME</button>
          </Link>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
