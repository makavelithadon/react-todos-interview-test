import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Filter from "containers/Filter";

const StyledGroup = styled.div.attrs(() => ({
  className: "control-group"
}))`
  margin-bottom: 20px;
`;

function Filters({ history, match }) {
  const handleChangeFilter = e => {
    history.push({ pathname: `/todoslists/${match.params.id}/todos`, search: `?filter=${e.target.name}` });
  };
  return (
    <StyledGroup>
      {[
        { label: "Tous", search: "all" },
        { label: "Achetés", search: "bought" },
        { label: "Pas encore achetés", search: "not-bought" }
      ].map(({ search, label }) => (
        <Filter key={search} filter={search} label={label} onChange={handleChangeFilter} />
      ))}
    </StyledGroup>
  );
}

export default withRouter(Filters);
