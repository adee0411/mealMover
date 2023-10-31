import { configureStore } from "@reduxjs/toolkit";

import menuFilterReducer from "./menuFilterSlice";
import navigationReducer from "./navigationSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    menuFilter: menuFilterReducer,
    navigation: navigationReducer,
    cart: cartReducer,
  },
});

export default store;
