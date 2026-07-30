const token = import.meta.env.VITE_TMBD_TOKEN;
const key = import.meta.env.VITE_TMBD_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
};

export async function fetchProducts() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`,
    options
  );

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
}

export default fetchProducts;
