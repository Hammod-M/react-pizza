import React from "react";
import { useDispatch } from "react-redux";
import { setCategoriesActive } from "../redux/slices/filterSlice";

export const Categories = ({ categories, categoriesActive }) => {
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <ul>
        {categories.map((li, index) => (
          <li
            className={categoriesActive === index ? "active" : ""}
            key={li}
            onClick={() => dispatch(setCategoriesActive(index))}
          >
            {li}
          </li>
        ))}
      </ul>
    </div>
  );
};
