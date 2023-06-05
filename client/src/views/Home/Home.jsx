import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, CurrentPage } from "../../redux/actions";
import Filters from "../../components/Filters/Filters";
import Orders from "../../components/Orders/Orders";
import Paginate from "../../components/Paginate/Paginate";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const [filteredDogs, setFilteredDogs] = useState(allDogs);
  const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    if (allDogs.length === 0) {
      dispatch(getAllDogs());
    } else {
      dispatch(CurrentPage(currentPage));
    }
    setFilteredDogs(allDogs);
  }, [dispatch, allDogs.length, currentPage]);

  const handlePageChange = (page) => {
    dispatch(CurrentPage(page));
  };

  const dogsPerPage = 8;
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
        totalDogs={filteredDogs.length}
        dogsPerPage={dogsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
