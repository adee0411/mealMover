import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    isNavOpen: false,
    cartFeedback: false,
  },
  reducers: {
    toggleNavigation(state) {
      state.isNavOpen = !state.isNavOpen;
    },
    addCartAnimation(state, action) {
      state.cartFeedback = action.payload;
    },
  },
});

export const { toggleNavigation, addCartAnimation } = navigationSlice.actions;

export default navigationSlice.reducer;
