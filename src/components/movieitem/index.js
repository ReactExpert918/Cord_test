import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

export default function MovieItem({ movie, genres }) {
  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="POST"
        />
      </LeftCont>
      <RightCont>
        <Heading>
          <Title>{movie.title}</Title>
          <Vote>{movie.vote_average}</Vote>
        </Heading>
        <Genre>
          {movie.genre_ids.map((id, index) => {
            let res = genres.find((obj) => obj.id === id);
            return (
              <span key={id}>
                {res.name} {index < movie.genre_ids.length - 1 && " | "}
              </span>
            );
          })}
        </Genre>
        <Overview>{movie.overview}</Overview>
        <Date>{movie.release_date}</Date>
      </RightCont>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  margin: 15px 0;
  padding: 20px;
  position: relative;
`;

const LeftCont = styled.div`
  display: inline-block;
  width: 25%;
  img {
    height: 100%;
    width: 100%;
  }
`;

const RightCont = styled.div`
  display: inline-block;
  margin-left: 20px;
  width: calc(75% - 20px);
`;
const Heading = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h2`
  font-size: 1.4rem;
  margin: 0px 0px 10px 0px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Vote = styled.div`
  background-color: ${colors.primaryColor};
  border-radius: 5px;
  color: white;
  padding: 5px 7px;
`;
const Genre = styled.div`
  color: ${colors.primaryColor};
  font-size: 0.8rem;
  font-weight: 900;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Overview = styled.p`
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  word-break: none;
  overflow: hidden;
  hyphens: auto;
  @keyframes states {
    0% {
      word-break: break-all;
    }
  }
`;
const Date = styled.div`
  bottom: 20px;
  color: ${colors.primaryColor};
  font-size: 13px;
  position: absolute;
`;
