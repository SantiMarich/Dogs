import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getQueryDogs } from "../../redux/actions";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchDog, setSearchDog] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    const query = event.target.value;
    setSearchDog(query);
    dispatch(getQueryDogs(query));
  };

  return (
    <div className={style.search}>
      <input
        type="text"
        onChange={handleInput}
        placeholder="SEARCH..."
        className={style.input}
      />
    </div>
  );
}
