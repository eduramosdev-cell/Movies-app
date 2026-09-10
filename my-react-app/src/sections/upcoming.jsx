import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, X } from "lucide-react";
import { fetchUpcoming, fetchTrailer } from "../api/moviesApi";
import MovieCard from "../components/movieCard.jsx";
import BigModal from "../components/bigModal.jsx";

export const Upcoming = () => {

    const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
    const POSTER_SIZE = "w500";
    const BACKDROP_SIZE = "w1280";
    const PROFILE_SIZE = "w185";

    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        async function loadData() {
            const result = await fetchUpcoming();
            setUpcoming(result);
        }

        loadData();
    }, []);

    const carousel = useRef(null);

    const handleScrollLeft = (e) => {
        e.preventDefault();
        carousel.current.scrollBy({ left: -800, behavior: 'smooth' });
    }

    const handleScrollRight = (e) => {
        e.preventDefault();
        carousel.current.scrollBy({ left: 800, behavior: 'smooth' });
    }

    {/*See details functionality*/}

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedTrailerKey, setselectedTrailerKey] = useState(null)

    {/*Trailer fetching*/}
    useEffect(() => {
        if (!selectedMovie) return;

        async function loadTrailer() {
            const result = await fetchTrailer(selectedMovie.id);
            const trailerResult =
                result?.find(
                    (video) =>
                        video.site === "YouTube" &&
                        ["trailer"].includes(video.type?.toLowerCase())
                ) ??
                result?.find((video) => video.site === "YouTube") ??
                null;
            setselectedTrailerKey(trailerResult?.key ?? null);
        }

        loadTrailer();
    }, [selectedMovie]);

    return (
        <section id="upcoming" aria-labelledby="upcoming-heading">
        <div className="relative w-full h-auto bg-background flex flex-col items-center justify-center" id="upcoming">
            <div className="w-full flex flex-row justify-start items-center">
                <h2 className="text-3xl py-3 px-8">Upcoming</h2>
            </div>
            <div className="relative w-full">
                <div className="w-full h-max flex items-center justify-start gap-4 py-2 px-2 relative overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
                    ref={carousel}>
                    {upcoming.map((movie) => (
                        <button type="button" aria-label={`View details for ${movie.title}`} key={movie.id} className="w-full h-120" onClick={() => setSelectedMovie(movie)}>
                            <MovieCard
                                title={movie.title}
                                posterPath={`${TMDB_IMAGE_BASE_URL}/${POSTER_SIZE}${movie.poster_path}`}
                                rating={movie.vote_average.toFixed(2)}
                                releaseDate={movie.release_date}
                            />
                        </button>
                    ))}
                </div>
                <div className="absolute inset-0 z-50 flex justify-between items-center px-4 pointer-events-none">
                    <div>
                        <button type="button" onClick={handleScrollLeft} className="pointer-events-auto bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-colors" aria-label="Scroll left">
                            <ChevronLeft size={50} />
                        </button>
                    </div>
                    <div>
                        <button type="button" onClick={handleScrollRight} className="pointer-events-auto bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-colors" aria-label="Scroll right">
                            <ChevronRight size={50} />
                        </button>
                    </div>
                </div>
            </div>
            {selectedMovie && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/40 backdrop-blur-lg overscroll-behavior:contain">
                <BigModal 
                movie={selectedMovie}
                title={selectedMovie.title}
                posterPath={`${TMDB_IMAGE_BASE_URL}/${POSTER_SIZE}${selectedMovie.poster_path}`}
                rating={selectedMovie.vote_average}
                releaseDate={selectedMovie.release_date}
                className = ""
                language={selectedMovie.original_language}
                overview={selectedMovie.overview}
                trailer={selectedTrailerKey}
                />
                <button type="button" onClick={() => setSelectedMovie(false)} className="absolute top-5 right-5 text-white hover:text-gray-300 z-100" aria-label="Close details">
                    <X className="w-9 h-9"/>
                </button>
            </div>
            )}

        </div>
        </section>
    );
};