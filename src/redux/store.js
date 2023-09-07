import { configureStore } from "@reduxjs/toolkit";
import masterReducer from "./masterReducer";

export default configureStore({
  reducer: {
    news: masterReducer
  }
});
