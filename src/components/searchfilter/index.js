import React, { useState } from "react";
import styled, { css } from "styled-components";

import AccordionFilter from "../accordionfilter";
import SearchBar from "../../components/searchbar";

import SearchIcon from "../../images/search-icon-yellow.png";
import YearIcon from "../../images/year-icon.png";

export default function SearchFilters({
  genres,
  ratings,
  languages,
  onSearch,
}) {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");

  const keywordChange = (keyword) => {
    setQuery(keyword);
    onSearch(keyword, year);
  };
  const yearChange = (val) => {
    setYear(val);
    onSearch(query, val);
  };
  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword_search_input"
          type="text"
          icon={{ src: SearchIcon, alt: "Magnifying glass" }}
          placeholder="Search for movies"
          onChange={keywordChange}
        />
        <SearchBar
          id="year_search_input"
          type="number"
          icon={{ src: YearIcon, alt: "Calendar icon" }}
          placeholder="Year of release"
          onChange={yearChange}
        />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movie</CategoryTitle>
        {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories */}
        <AccordionFilter title="Select genre(s)" options={genres} />
        <AccordionFilter title="Select min.vote" options={ratings} />
        <AccordionFilter title="Select language" options={languages} />
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  .search_bar_wrapper:nth-child(2) {
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}

  &:nth-child(2) {
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
`;

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;
