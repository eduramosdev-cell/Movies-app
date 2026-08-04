const token = import.meta.env.VITE_TMBD_TOKEN;
const key = import.meta.env.VITE_TMBD_KEY;

let movies = [];

async function fetchMovies() {

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}`);

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  movies = ((await response.json()).results);
  console.log("fasda", movies);
  return movies;
}

fetchMovies();

export { movies };

