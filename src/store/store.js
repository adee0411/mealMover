import { configureStore } from "@reduxjs/toolkit";

import menuFilterReducer from "./menuFilterSlice";

const store = configureStore({
  reducer: {
    menuFilter: menuFilterReducer,
  },
});

export default store;
