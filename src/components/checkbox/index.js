import React from "react";
import styled from "styled-components";

export default function Checkbox({ id, name, label, onChange }) {
  // TODO: Style the component and checkmark to look like the mockup provided
  return (
    <CheckboxCont>
      <input
        type="checkbox"
        id={id}
        name={name}
        onChange={(e) => onChange(e)}
      ></input>
      <label htmlFor={id}>{label}</label>
    </CheckboxCont>
  );
}

const CheckboxCont = styled.div`
  position: relative;
  input {
    margin-right: 1rem;
  }
`;
