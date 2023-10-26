import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    isNavOpen: false,
  },
  reducers: {
    toggleNavigation(state) {
      state.isNavOpen = !state.isNavOpen;
    },
  },
});

export const { toggleNavigation } = navigationSlice.actions;

export default navigationSlice.reducer;
