import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../checkbox";
import Plus from "../../images/plus-icon.svg";
import Minus from "../../images/minus-icon.svg";

export default function AccordionFilter({ title, options }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.checked);
  };
  return (
    <Filter>
      <FilterTitle onClick={handleClick}>
        {expanded ? (
          <img src={Minus} alt="minus" />
        ) : (
          <img src={Plus} alt="plus" />
        )}

        {title}
      </FilterTitle>
      {expanded && (
        <OptionsWrapper>
          {options.map((val) => {
            return (
              <Option key={val.id}>
                <Checkbox
                  id={val.id}
                  name={val.name}
                  label={val.name}
                  onChange={handleChange}
                />
              </Option>
            );
          })}
        </OptionsWrapper>
      )}
    </Filter>
  );
}

const Filter = styled.div`
  margin-top: 10px;
`;
const FilterTitle = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  font-size: 18px;

  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;
const OptionsWrapper = styled.div`
  margin: 20px 0px;
`;
const Option = styled.div`
  margin: 5px 0px;
`;
