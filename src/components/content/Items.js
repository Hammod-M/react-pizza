import React from "react";
import Skeleton from "../UI/Skeleton";
import { PizzaBlock } from "./PizzaBlock";

export const Items = ({ pizzas, isLoading, searchVal }) => {
   return (
      <div className="content__items">
         {isLoading === true
            ? Array(10)
                 .fill(4)
                 .map((item, index) => <Skeleton {...item} key={index} />)
            : pizzas.map((item) => <PizzaBlock {...item} key={item.id} />)}
      </div>
   );
};
