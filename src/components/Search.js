import React from "react";

import { setSearchVal } from "../redux/slices/searchSlice";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

import icon from "../assets/img/searchLogo.png";

export const Search = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const updateSearchValue = React.useCallback(
    () => debounce((str) => dispatch(setSearchVal(str)), 250),
    []
  );

  function onChangeInput(e) {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  }

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        value={value}
        onChange={(e) => onChangeInput(e)}
        placeholder="Поиск"
      />
      <img src={icon} alt="search IMG" className="search__icon" />
    </div>
  );
};
