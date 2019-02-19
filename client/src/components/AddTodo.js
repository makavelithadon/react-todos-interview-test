import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 40px auto 0 auto;
  max-width: 960px;
`;

const StyledInput = styled.input`
  padding: 0.7rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0);
  outline: 0;
  outline-offset: 0;
  &:focus {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 10px;
`;

const StyledTextInput = styled(StyledInput).attrs({
  type: "text"
})`
  margin-right: 8px;
  border: 1px solid lightgrey;
`;

const StyledButton = styled(StyledInput).attrs({
  type: "submit"
})``;

export default function AddTodo({ addTodo, isAdding }) {
  const [content, setContent] = useState("");
  const handleChange = e => setContent(e.target.value);
  return (
    <StyledForm
      onSubmit={e => {
        e.preventDefault();
        if (content.trim()) {
          addTodo(content);
          setContent("");
        }
      }}
    >
      <StyledLabel htmlFor="todo">Add a todo</StyledLabel>
      <br />
      <StyledTextInput
        id={"todo"}
        value={content}
        onChange={handleChange}
        readonly={isAdding}
        placeholder={"Type a todo to add it on your todo's list"}
      />
      <StyledButton value={"Ajouter"} />
    </StyledForm>
  );
}
