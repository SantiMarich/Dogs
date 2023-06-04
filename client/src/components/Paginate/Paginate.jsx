import React from "react";
import style from "./Paginate.module.css";

const Paginate = ({ totalDogs, dogsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalDogs / dogsPerPage);

  const handleFirstPage = () => {
    onPageChange(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    onPageChange(totalPages - 1);
  };

  return (
    <div className={style.containerPaginate}>
      <button onClick={handleFirstPage} className={style.pageControl}>
        {"◄◄"}
      </button>
      <button onClick={handlePrevPage} className={style.pageControl}>
        {"◄"}
      </button>
      <p className={style.pageControlNumber}>
        {currentPage + 1} - {totalPages || 0}
      </p>
      <button onClick={handleNextPage} className={style.pageControl}>
        {"►"}
      </button>
      <button onClick={handleLastPage} className={style.pageControl}>
        {"►►"}
      </button>
    </div>
  );
};

export default Paginate;
