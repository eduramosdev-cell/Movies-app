import { useEffect, useState } from "react";
import { fetchGenres } from "./genre api";
import { fetchMovies } from "./movies api"

export default function App() {
  const [genres, setGenres] = useState(null);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGenres()
      .then((data) => setGenres(data))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    fetchMovies()
      .then((data) => setMovies(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {!error && !genres && !movies && <div>Loading...</div>}
      {genres && movies && 
      <>
        <pre>{JSON.stringify(genres, null, 2)}</pre>
        <div>{JSON.stringify(movies, null, 2)}</div>
      
      </>}
    </div>
  );
};
