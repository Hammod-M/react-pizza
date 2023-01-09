import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
   totalPrice: 0,
};

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addItems(state, action) {
         // state.items.push(action.payload);
         const findItem = state.items.find(
            (item) => item.id === action.payload.id
         );
         if (findItem) findItem.count += 1;
         else
            state.items.push({
               ...action.payload,
               count: 1,
            });
         state.totalPrice = state.items.reduce((sum, obj) => {
            return obj.price * obj.count + sum;
         }, 0);
      },
      minusItems(state, action) {
         const findItem = state.items.find(
            (item) => item.id === action.payload
         );
         if (findItem) {
            if (findItem.count > 0) {
               findItem.count -= 1;
               state.totalPrice -= findItem.price;
            } else findItem.count -= 0;
         }

         // state.totalPrice = state.items.reduce((sum, obj) => {
         //    return sum - obj.price;
         // }, 0);
      },
      removeItems(state, action) {
         state.items = state.items.filter(
            (obj) => obj.id !== action.payload.id
         );
         state.totalPrice -= action.payload.count * action.payload.price;
      },
      clearItems(state) {
         state.items = [];
         state.totalPrice = 0;
      },
   },
});

export const { addItems, removeItems, clearItems, minusItems } =
   cartSlice.actions;

export default cartSlice.reducer;
