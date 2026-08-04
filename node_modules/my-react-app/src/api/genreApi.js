const token = import.meta.env.VITE_TMBD_TOKEN;
const key = import.meta.env.VITE_TMBD_KEY;

export async function fetchGenres() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
}

export default fetchGenres;