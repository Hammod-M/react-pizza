import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { Items } from "../components/content/Items";
import { Pagination } from "../components/pagination";
import { Top } from "../components/Top";
import { setCurrentPage, setSort } from "../redux/slices/filterSlice";
import { sortItems } from "../components/Sort";
import { fetchPizzas, setPizzas } from "../redux/slices/pizzasSlice";

const categories = [
   "Все",
   "Мясные",
   "Вегетарианская",
   "Гриль",
   "Острые",
   "Закрытые",
];

export const Home = ({}) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const isSearch = useRef(false);
   const isParams = useRef(false);

   const { categoriesActive, sortActive } = useSelector(
      (state) => state.filter
   );
   const pizzas = useSelector((state) => state.pizzas.items);

   const [isLoading, setIsLoading] = useState(true);

   const currentPage = useSelector((state) => state.filter.currentPage);

   const searchVal = useSelector((state) => state.search.searchVal);

   async function getPizzas() {
      setIsLoading(true);
      const sortBy = sortActive.sortType.replace("-", "");
      const order = sortActive.sortType.includes("-") ? "asc" : "desc";
      const category =
         categoriesActive > 0 ? `category=${categoriesActive}` : "";
      const search = searchVal ? `&search=${searchVal}` : "";

      await dispatch(
         fetchPizzas({ sortBy, order, category, search, currentPage })
      );
      setIsLoading(false);
   }

   useEffect(() => {
      if (isParams.current) {
         const searchParams = qs.stringify({
            categoriesActive,
            sortType: sortActive.sortType,
            currentPage,
         });
         navigate(`?${searchParams}`);
      }
      isParams.current = true;
   }, [categoriesActive, sortActive, currentPage]);

   //if first render? Then we take URL and save to redux
   useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1));
         const sortActive = sortItems.find(
            (obj) => obj.sortType === params.sortType
         );

         dispatch(
            setSort({
               ...params,
               sortActive,
            })
         );

         isSearch.current = true;
      }
   }, []);

   useEffect(() => {
      if (!isSearch.current) {
         getPizzas();
      }
      isSearch.current = false;
   }, [categoriesActive, sortActive, searchVal, currentPage]);

   return (
      <div className="content">
         <div className="container">
            <Top categories={categories} categoriesActive={categoriesActive} />
            <h2 className="content__title">Все пиццы</h2>
            <Items
               pizzas={pizzas}
               isLoading={isLoading}
               searchVal={searchVal}
            />
            <Pagination onChangePage={(e) => dispatch(setCurrentPage(e))} />
         </div>
      </div>
   );
};
