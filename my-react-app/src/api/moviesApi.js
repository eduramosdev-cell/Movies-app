const token = import.meta.env.VITE_TMBD_TOKEN;
const key = import.meta.env.VITE_TMBD_KEY;

const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const POSTER_SIZE = "w500";
const BACKDROP_SIZE = "w1280";
const PROFILE_SIZE = "w185";

let nowPlayingMovies = [];

export async function fetchNowPlaying() {

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`);

  if (!response.ok) {
    throw new Error('Failed to fetch now playing movies');
  }

  nowPlayingMovies = ((await response.json()).results);
  console.log(nowPlayingMovies);
  return nowPlayingMovies;
}
