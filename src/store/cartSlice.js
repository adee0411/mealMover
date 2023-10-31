import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {
      items: [
        {
          id: "item001",
          title: "Test Item",
          itemTotal: 12345,
          image_url:
            "https://donpedropizza.hu/wp-content/uploads/2019/07/Husimado-pizza2-scaled.jpg",
        },
      ],
      totalAmount: 0,
      numOfItems: 0,
    },
  },
  reducers: {
    addItem(state, action) {
      const itemIndex = state.cart.items.findIndex(
        (el) => el.id === action.payload.id
      );
      if (itemIndex >= 0) {
      } else {
        state.cart.items.push(action.payload);
      }
    },
    removeItem(state, action) {
      const itemToRemove = state.cart.items.find(
        (el) => el.id === action.payload
      );

      state.cart.items = state.cart.items.filter(
        (el) => el.id !== action.payload
      );

      state.cart.totalAmount -= itemToRemove.itemTotal;
    },
    updateItem(state, action) {
      const itemToUpdate = state.cart.items.find(
        (el) => el.id === action.payload.id
      );
      const itemIndex = state.cart.items.findIndex(
        (el) => el.id === action.payload.id
      );
      const updatedItem = { ...itemToUpdate };
      updatedItem.itemTotal += action.payload.amount;
      state.cart.items[itemIndex] = updatedItem;
    },
  },
});

export const { addItem, removeItem, updateItem } = cartSlice.actions;

export default cartSlice.reducer;
