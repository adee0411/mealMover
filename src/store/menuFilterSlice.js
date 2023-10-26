import { createSlice } from "@reduxjs/toolkit";

import menu from "../data/menu";

export const menuFilterSlice = createSlice({
  name: "menuFilter",
  initialState: {
    allMenu: menu,
    filteredMenu: menu,
    activeFilter: "all",
  },
  reducers: {
    setActiveFilter(state, action) {
      state.activeFilter = action.payload;
      if (state.activeFilter === "all") {
        state.filteredMenu = menu;
      } else {
        state.filteredMenu = menu[state.activeFilter];
      }
    },
  },
});

export const { setActiveFilter } = menuFilterSlice.actions;

export default menuFilterSlice.reducer;
