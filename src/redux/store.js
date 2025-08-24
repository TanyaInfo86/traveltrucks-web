import { configureStore } from "@reduxjs/toolkit";
// import { filterReducer } from "./filters/slice.js";
// import { campersReducer } from "./campers/slice.js";
// import favoritesReducer from "./favorites/slice";

export const store = configureStore({
  reducer: {
    // campers: campersReducer,
    // filters: filterReducer,
    // favorites: favoritesReducer,
  },
});