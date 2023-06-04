import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/actions";
import Filters from "../../components/Filters/Filters";
import Orders from "../../components/Orders/Orders";
import Paginate from "../../components/Paginate/Paginate";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(0);
  const dogsPerPage = 8;

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = currentPage * dogsPerPage;
  const endIndex = startIndex + dogsPerPage;
  const paginatedDogs = allDogs.slice(startIndex, endIndex);
  const totalDogs = allDogs.length;

  return (
    <div className={style.containerHome}>
      <div className={style.selectors}>
        <Filters />
        <Orders />
      </div>
      <Container dogs={paginatedDogs} />
      <Paginate
        totalDogs={totalDogs}
        dogsPerPage={dogsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
