import { all, fork } from "redux-saga/effects";
import weatherSaga from "./weather/sagas";

export function* rootSaga() {
  yield all([fork(weatherSaga)]);
}