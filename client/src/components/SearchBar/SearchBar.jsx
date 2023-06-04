import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getQueryDogs } from "../../redux/actions";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchDog, setSearchDog] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    setSearchDog(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getQueryDogs(searchDog));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div className={style.search}>
      <input
        type="text"
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        placeholder="SEARCH..."
        className={style.input}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className={style.searchButton}
      ></button>
    </div>
  );
}
