import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Input from "components/Input";
import Button from "components/Button";

const StyledForm = styled.form`
  margin-bottom: 40px;
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 10px;
`;

const StyledTextInput = styled(Input).attrs({
  type: "text"
})`
  margin-right: 8px;
  border: 1px solid lightgrey;
`;

function AddTodo({ addTodo, isAdding, match }) {
  const [content, setContent] = useState("");
  const handleChange = e => setContent(e.target.value);
  return (
    <StyledForm
      onSubmit={e => {
        e.preventDefault();
        if (content.trim()) {
          addTodo(content, match.params.id);
          setContent("");
        }
      }}
    >
      <StyledLabel htmlFor="todo">Ajouter un produit</StyledLabel>
      <br />
      <StyledTextInput
        id={"todo"}
        type={"text"}
        value={content}
        onChange={handleChange}
        readonly={isAdding}
        placeholder={"Type a todo to add it on your todo's list"}
        size={30}
      />
      <Button type={"submit"} color={"deeppink"} bgColor={"#fff"} rounded disabled={!content.trim()}>
        Ajouter
      </Button>
    </StyledForm>
  );
}

export default withRouter(AddTodo);
