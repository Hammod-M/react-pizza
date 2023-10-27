import { useEffect } from "react";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortActive } from "../redux/slices/filterSlice";

export const sortItems = [
  { name: "популярности (DESC)", sortType: "rating" },
  { name: "популярности (ASC)", sortType: "-rating" },
  { name: "цене (DESC)", sortType: "price" },
  { name: "цене (ASC)", sortType: "-price" },
  { name: "алфавиту (DESC)", sortType: "title" },
  { name: "алфавиту (ASC)", sortType: "-title" },
];

export const Sort = ({ sort }) => {
  const sortActive = useSelector((state) => state.filter.sortActive);
  const [sortPopupActive, setSortPopupActive] = useState(false);
  // const [sortItemActive, setSortItemActive] = useState(0);
  const sortRef = useRef();

  const dispatch = useDispatch();
  function popupSortActive(item, type, index) {
    // setSortItemActive(index);
    dispatch(setSortActive({ name: item, sortType: type }));
    setSortPopupActive(!sortPopupActive);
  }
  function showPopupSort() {
    setSortPopupActive(!sortPopupActive);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event, event.path);
      if (!event.composedPath().includes(sortRef.current)) {
        setSortPopupActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={sortPopupActive ? "rotateIcon" : ""}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={showPopupSort}>{sortActive.name}</span>
      </div>
      {sortPopupActive && (
        <div className="sort__popup">
          <ul>
            {sortItems.map((item, index) => (
              <li
                key={index}
                className={sortActive.name === item.name ? "active" : ""}
                onClick={() => popupSortActive(item.name, item.sortType, index)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
