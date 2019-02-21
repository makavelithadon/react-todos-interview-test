import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Filter from "containers/Filter";

const StyledGroup = styled.div.attrs(() => ({
  className: "control-group"
}))`
  margin-bottom: 20px;
`;

function Filters({ history }) {
  const handleChangeFilter = e => {
    history.push({ pathname: "/todos", search: `?filter=${e.target.name}` });
  };
  return (
    <StyledGroup>
      {["all", "completed", "active"].map(filter => (
        <Filter key={filter} filter={filter} onChange={handleChangeFilter} />
      ))}
    </StyledGroup>
  );
}

export default withRouter(Filters);
