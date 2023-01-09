import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
   "pizzas/fetchPizzasStatus",
   async ({ sortBy, order, category, search, currentPage }) => {
      const { data } = await axios.get(
         `https://62da6cf8e56f6d82a76126c3.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      return data;
   }
);

const initialState = {
   items: [],
   status: "loading",
};

export const pizzasSlice = createSlice({
   name: "pizzas",
   initialState,
   reducers: {
      setPizzas(state, action) {
         state.items = action.payload;
      },
   },
   extraReducers: {
      [fetchPizzas.pending]: (state) => {
         state.items = [];
         state.status = "loading";
      },
      [fetchPizzas.fulfilled]: (state, action) => {
         state.items = action.payload;
         state.status = "success";
      },
      [fetchPizzas.rejected]: (state) => {
         state.items = [];
         state.status = "error";
      },
   },
});

export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
