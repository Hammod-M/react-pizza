import React from "react";
import { Categories } from "./Categories";
import { Sort } from "./Sort";

export const Top = ({ categories, categoriesActive}) => {
  return (
    <div className="content__top">
      <Categories categories={categories} categoriesActive={categoriesActive} />
      <Sort />
    </div>
  );
};
