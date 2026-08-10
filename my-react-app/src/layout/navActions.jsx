import { Search, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchTrailer } from "../api/moviesApi"
import MovieCard from "../components/movieCard"
import BigModal from "../components/bigModal"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const NavActions = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [search, setSearch] = useState("")
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedTrailerKey, setselectedTrailerKey] = useState(null)
    const inputRef = useRef(null)
    const carousel = useRef(null);

    {/*See details functionality*/}

    
    {/*Trailer fetching*/}
    useEffect(() => {
        if (!selectedMovie) {
            setselectedTrailerKey(null);
            return;
        }

        let isMounted = true;

        async function loadTrailer() {
            setselectedTrailerKey(null);

            try {
                const result = await fetchTrailer(selectedMovie.id);
                const trailerResult =
                    result?.find(
                        (video) =>
                            video.site === "YouTube" &&
                            ["trailer", "teaser", "clip"].includes(video.type?.toLowerCase())
                    ) ??
                    result?.find((video) => video.site === "YouTube") ??
                    null;

                if (isMounted) {
                    setselectedTrailerKey(trailerResult?.key ?? null);
                }
            } catch (error) {
                console.error("Failed to fetch trailer:", error);

                if (isMounted) {
                    setselectedTrailerKey(null);
                }
            }
        }

        loadTrailer();

        return () => {
            isMounted = false;
        };
    }, [selectedMovie]);

    const handleScrollLeft = (e) => {
        e.preventDefault();
        carousel.current.scrollBy({ left: -800, behavior: 'smooth' });
    }

    const handleScrollRight = (e) => {
        e.preventDefault();
        carousel.current.scrollBy({ left: 800, behavior: 'smooth' });
    }

    const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
    const POSTER_SIZE = "w500";

    useEffect(() => {
        if (isVisible && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isVisible])

    const key = import.meta.env.VITE_TMBD_KEY

    const fetchMovies = async () => {
        if (!search.trim()) return []

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${encodeURIComponent(search.trim())}&include_adult=false`
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error("Failed to fetch movies")
        }

        const data = await res.json()
        return data.results
    }

    const {
        data: movies = [],
        isLoading,
        error,
        isSuccess
    } = useQuery({
        queryKey: ["search", search],
        queryFn: fetchMovies,
        enabled: search.trim().length > 0,
    })


    return <>
        <div className={`flex ${isVisible ? "flex-row" : "flex-row-reverse"} items-center gap-3 max-w-md w-full pr-8 transition-all duration-300`}>
            <input
                ref={inputRef}
                type="search" 
                placeholder="Awesome movie here..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`
                    text-sm bg-background text-foreground border border-input rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-ring
                    transition-all duration-300 ease-in-out
                    ${isVisible 
                        ? 'flex-1 opacity-100 px-3 py-1.5 border-input' 
                        : 'w-0 opacity-0 px-0 py-1.5 border-transparent pointer-events-none'
                    }
                `}
            />

            <div className="mt-20">
                {isLoading && <p>Loading movies</p>}
                {error && <p>Error: {error.message}</p>}
            </div>
            {isSuccess &&  (
                    <div className="relative w-full h-auto bg-background flex flex-col items-center justify-center">
                        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-5xl px-4 bg-background/95 backdrop-blur-md py-8 rounded-xl shadow-2xl border border-border">
                            <div className="w-full h-max flex items-center justify-start gap-4 py-2 px-2 relative overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none]"
                                ref={carousel}>
                                {movies.map((movie) => (
                                    <div key={movie.id} className="w-full h-120" onClick={() => setSelectedMovie(movie)}>
                                        <MovieCard
                                            title={movie.title}
                                            posterPath={`${TMDB_IMAGE_BASE_URL}/${POSTER_SIZE}${movie.poster_path}`}
                                            rating={movie.vote_average.toFixed(2)}
                                            releaseDate={movie.release_date}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="absolute inset-0 z-50 flex justify-between items-center px-4 pointer-events-none">
                                <div>
                                    <button onClick={handleScrollLeft} className="pointer-events-auto bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-colors">
                                        <ChevronLeft size={50} />
                                    </button>
                                </div>
                                <div>
                                    <button onClick={handleScrollRight} className="pointer-events-auto bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-colors">
                                        <ChevronRight size={50} />
                                    </button>
                                </div>
                            </div>
                        </div>
            
                        {selectedMovie && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/40 backdrop-blur-lg overscroll-behavior:contain" onClick={() => setSelectedMovie(false)}>
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
                            <button onClick={() => setSelectedMovie(false)} className="absolute top-5 right-5 text-white hover:text-gray-300 z-100">
                                <X className="w-9 h-9"/>
                            </button>
                        </div>
                        )}
                    </div>
            )}

            <button 
                className="flex flex-row gap-2 text-lg text-primary-foreground items-center font-sans font-light hover:text-primary-foreground/80 transition-colors duration-300 whitespace-nowrap" 
                onClick={() => setIsVisible(!isVisible)}
                aria-label={isVisible ? "Close search" : "Open search"}
            >
                {isVisible ? (
                    <>Close <X size={20} /></>
                ) : (
                    <>Search <Search size={20} /></>
                )}
            </button>
        </div>
    </>
}
