import React, { useState } from "react";
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
        type={"text"}
        value={content}
        onChange={handleChange}
        readonly={isAdding}
        placeholder={"Type a todo to add it on your todo's list"}
      />
      <Button type={"submit"}>Ajouter</Button>
    </StyledForm>
  );
}
