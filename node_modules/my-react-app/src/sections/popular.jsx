import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { fetchNowPlaying } from "../api/moviesApi";
import MovieCard from "../components/movieCard.jsx";

export const Popular = () => {

    const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

    const POSTER_SIZE = "w500";
    const BACKDROP_SIZE = "w1280";
    const PROFILE_SIZE = "w185";

    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        async function loadData() {
            const result = await fetchNowPlaying();
            setNowPlaying(result);
        }

        loadData();
    }, []);

    return <div className="relative w-full h-auto bg-background flex flex-col items-center justify-center">
    <div className="w-full flex flex-row justify-start items-center">
        <h2 className="text-3xl py-3 px-8">Now Playing</h2>
    </div>
    <div className="w-full flex flex-row items-center justify-start gap-4 py-2 px-2">
        {nowPlaying.map((movie) => (
            <div key={movie.id} className="w-full h-96 relative">
                <MovieCard
                    title={movie.title}
                    posterPath={`${TMDB_IMAGE_BASE_URL}/${POSTER_SIZE}${movie.poster_path}`}
                    rating={movie.vote_average.toFixed(2)}
                     releaseDate={movie.release_date}
                />
            </div>
        ))}
    </div>
    </div>
}