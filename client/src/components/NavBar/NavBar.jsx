import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

const NavBar = ({ onSearch }) => {
  return (
    <div className={style.HeaderContainer}>
      <div className={style.NavBarContainer}>
        <Link to="/home">HOME</Link>
        <Link to="/create">CREATE YOUR DOG</Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
