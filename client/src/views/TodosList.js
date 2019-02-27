import React from "react";
import { NavLink } from "react-router-dom";

export default function TodosList({ todosList }) {
  return (
    <>
      <h2>{todosList.name.toUpperCase()}</h2>
      <NavLink to={`/todoslists/${todosList.id}/todos`}>Voir les todos</NavLink>
    </>
  );
}
