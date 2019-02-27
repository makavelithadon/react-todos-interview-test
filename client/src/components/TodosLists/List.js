import React from "react";
import { Link } from "react-router-dom";

export default function TodosLists({ todosLists }) {
  return todosLists.map((todosList, index) => (
    <Link key={todosList.id} to={`/todoslists/${todosList.id}`}>
      <div>Liste {todosList.name}</div>
    </Link>
  ));
}
