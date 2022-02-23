import axios from "axios";

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use
const API_KEY = "9d9d37ae606fb7ec8d9044d3bbbdee21";

export const getGenres = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  return res.data.genres;
};

export const getPopular = async (query = "", year = "") => {
  let url;
  if (query === "" && year === "") {
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  } else {
    url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
    url += `&query=${query}`;
    if (year !== "") url += `&primary_release_year=${year}`;
  }
  const res = await axios.get(url);
  return res.data;
};
