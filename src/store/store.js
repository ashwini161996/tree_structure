import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../rootSaga/rootSaga";
import reducer from "../reducer/reducer";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: { reducer },
  middleware: [saga],
});
saga.run(rootSaga);

export default store;
