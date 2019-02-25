import { all } from "redux-saga/effects";
import todos from "./../ducks/todos/sagas";
import todosLists from "./../ducks/todoslists/sagas";

const sagas = [todos, todosLists];

export default function* rootSagas() {
  yield all(sagas.map(saga => typeof saga === "function" && saga()));
}
