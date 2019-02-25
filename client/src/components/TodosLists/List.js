import React from "react";

export default function TodosLists({ todosLists }) {
  return todosLists.map((todoList, index) => <div key={todoList.id}>Liste {todoList.name}</div>);
}
