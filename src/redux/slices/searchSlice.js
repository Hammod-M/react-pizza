import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchVal: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchVal(state, action) {
      state.searchVal = action.payload;
    },
  },
});

export const { setSearchVal } = searchSlice.actions;

export default searchSlice.reducer;
