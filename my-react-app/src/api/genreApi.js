const token = import.meta.env.VITE_TMBD_TOKEN;
const key = import.meta.env.VITE_TMBD_KEY;

let genres = [];

export async function fetchGenres() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${key}`);

  if (!response.ok) {
    throw new Error('Failed to fetch genres');
  }

  genres = (await response.json());
  console.log(genres);

  return genres;
}

export default fetchGenres;