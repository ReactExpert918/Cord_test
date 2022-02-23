import React from "react";
import styled from "styled-components";

import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      year: 0,
      results: [],
      totalCount: 0,
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 },
      ],
      languageOptions: [
        { id: "GR", name: "Greek" },
        { id: "EN", name: "English" },
        { id: "RU", name: "Russian" },
        { id: "PO", name: "Polish" },
      ],
    };
    this.searchMovies = this.searchMovies.bind(this);
  }

  // TODO: Preload and set the popular movies and movie genres when page loads
  componentDidMount() {
    fetcher
      .getGenres()
      .then((genres) => {
        this.setState({ genreOptions: genres });
      })
      .catch((err) => {
        console.log(err);
      });

    fetcher
      .getPopular()
      .then((data) => {
        this.setState({ results: data.results });
        this.setState({ totalCount: data.total_results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // TODO: Update search results based on the keyword and year inputs
  searchMovies(query, year) {
    fetcher
      .getPopular(query, year)
      .then((data) => {
        this.setState({ results: data.results });
        this.setState({ totalCount: data.total_results });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const {
      genreOptions,
      languageOptions,
      ratingOptions,
      totalCount,
      results,
    } = this.state;

    return (
      <DiscoverWrapper>
        <MobilePageTitle>Discover</MobilePageTitle>{" "}
        {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            onSearch={(query, year) => this.searchMovies(query, year)}
          />
        </MovieFilters>
        <TotalCount>{totalCount} movies</TotalCount>
        <MovieResults>
          <MovieList movies={results || []} genres={genreOptions || []} />
        </MovieResults>
      </DiscoverWrapper>
    );
  }
}

const DiscoverWrapper = styled.main`
  padding: 45px;

  @media screen and (max-width: 1000px) {
    display: block;
    padding: 20px;
  }
`;

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 37px;

  @media screen and (max-width: 1000px) {
    float: none;
    width: 100%;
  }
`;

const MobilePageTitle = styled.h1`
  display: none;
  margin-left: 50px;
  @media screen and (max-width: 1000px) {
    display: inline;
  }
`;

const TotalCount = styled.strong`
  display: block;
`;
