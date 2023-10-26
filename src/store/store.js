import { configureStore } from "@reduxjs/toolkit";

import menuFilterReducer from "./menuFilterSlice";
import navigationReducer from "./navigationSlice";

const store = configureStore({
  reducer: {
    menuFilter: menuFilterReducer,
    navigation: navigationReducer,
  },
});

export default store;
