const API_KEY = "167c7f95744220c32418e9c82f119089";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&withgenres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&withgenres=35`,
  fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&withgenres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&withgenres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&withgenres=99`,
};

export default requests;
