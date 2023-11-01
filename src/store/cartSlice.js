import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {
      items: [],
      totalAmount: 0,
      numOfItems: 0,
    },
  },
  reducers: {
    removeItem(state, action) {
      const itemToRemove = state.cart.items.find(
        (el) => el.itemData.id === action.payload
      );

      state.cart.items = state.cart.items.filter(
        (el) => el.itemData.id !== action.payload
      );

      state.cart.totalAmount -= itemToRemove.itemTotal;
    },
    addItem(state, action) {
      const isItemExist =
        state.cart.items.findIndex(
          (el) => el.itemData.id === action.payload.itemData.id
        ) >= 0;
      if (!isItemExist) {
        state.cart.items.push(action.payload);
      } else {
        // Update existing item
      }
      state.cart.numOfItems += action.payload.quantity;
      // Update Cart Amount!!!
    },
    updateItem(state, action) {
      const itemIndex = state.cart.items.findIndex(
        (el) => el.itemData.id === action.payload.id
      );
      const itemToUpdate = state.cart.items.find(
        (el) => el.itemData.id === action.payload.id
      );
      const newQuantity = action.payload.quantity;
      const newItemTotal = newQuantity * itemToUpdate.itemData.price;
      state.cart.items[itemIndex] = {
        ...state.cart.items[itemIndex],
        quantity: newQuantity,
        itemTotal: newItemTotal,
      };
      state.cart.numOfItems += action.payload.quantity;
      // Update Cart Amount!!!
    },
  },
});

export const { removeItem, addItem, updateItem } = cartSlice.actions;

export default cartSlice.reducer;
