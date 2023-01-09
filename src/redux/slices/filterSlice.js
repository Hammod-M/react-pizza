import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   // sortItemActive: 0,
   categoriesActive: 0,
   currentPage: 1,
   sortActive: { name: "популярности (DESC)", sortType: "rating" },
};

export const filterSlice = createSlice({
   name: "filter",
   initialState,
   reducers: {
      setCategoriesActive(state, action) {
         state.categoriesActive = action.payload;
      },
      setSortActive(state, action) {
         state.sortActive = action.payload;
      },
      setCurrentPage(state, action) {
         state.currentPage = action.payload;
      },
      setSort(state, action) {
         state.categoriesActive = Number(action.payload.categoriesActive);
         state.currentPage = Number(action.payload.currentPage);
         state.sortActive = action.payload.sortActive;
      },
   },
});

export const { setCategoriesActive, setSortActive, setCurrentPage, setSort } =
   filterSlice.actions;

export default filterSlice.reducer;
