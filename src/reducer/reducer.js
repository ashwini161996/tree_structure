import { combineReducers } from "@reduxjs/toolkit";
import newsDataReducer from "../slices/newsDataState";

export default combineReducers({
  newsData: newsDataReducer,
});
