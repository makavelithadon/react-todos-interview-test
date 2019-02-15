import { all } from "redux-saga/effects";
import todos from "./../ducks/todos/sagas";

const sagas = [todos];

export default function* rootSagas() {
  yield all(sagas.map(saga => saga && typeof saga === 'function' && saga()));
}