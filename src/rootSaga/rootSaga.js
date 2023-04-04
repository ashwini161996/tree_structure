import { call, put, takeEvery } from "redux-saga/effects";
import { getNewsDataSuccess } from "../slices/newsDataState";

function* workHeaderCatch() {
  const newsData = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/posts")
  );
  const getFormatedData = yield newsData.json();
  yield put(getNewsDataSuccess(getFormatedData));
}

function* rootSaga() {
  yield takeEvery("newsData/getNewsDataFetch", workHeaderCatch);
}

export default rootSaga;
