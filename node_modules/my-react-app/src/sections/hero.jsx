import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { fetchNowPlaying } from "../api/moviesApi";
import { fetchGenres } from "../api/genreApi";
import { Button } from "../components/button";
import { fetchTrailer } from "../api/moviesApi";
import YouTube from "react-youtube";

export const Hero = () => {

    {/*constants*/}
    const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
    const BACKDROP_SIZE = "w1280";

    const [nowPlaying, setNowPlaying] = useState([]);
    const [genres, setGenres] = useState({ genres: [] });
    const [trailer, setTrailer] = useState(null);
    const [seeTrailer, setSeeTrailer] = useState(false);
    const featuredMovie = nowPlaying[0] ?? {};
    const genreNames = getGenresNames(featuredMovie.genre_ids ?? []);


    {/*Now Playing fetching*/}
    useEffect(() => {
        async function loadData() {
            const result = await fetchNowPlaying();
            setNowPlaying(result);
        }

        loadData();
    }, []);

    {/*Genre fetching*/}
    useEffect(() => {
        async function loadGenres() {
            const result = await fetchGenres();
            setGenres(result ?? { genres: [] });
        }

        loadGenres();
    }, []);

    function getGenresNames(genreIds = []) {
        if (!Array.isArray(genreIds) || !genres?.genres?.length) {
            return [];
        }

        return genreIds
            .map((id) => {
                const genre = genres.genres.find((g) => g.id === id);
                return genre ? genre.name : null;
            })
            .filter(Boolean);
    }

    {/*Trailer fetching*/}
    useEffect(() => {
        async function loadTrailer() {
            console.log("Fetching trailer for movie ID:", featuredMovie.id);
            const result = await fetchTrailer(featuredMovie.id);
            const trailerResult = result?.find((video) => video.type.toLowerCase() === "trailer");
            setTrailer(trailerResult ?? null);
        }

        loadTrailer();
    }, [featuredMovie.id]);

    function handleWatchTrailer() {
        setSeeTrailer(true);
    }

    return (
        <div className="relative w-full bg-background flex flex-col items-center justify-center overflow-hidden">
            {/* Hero img */}
            <div className="w-full z-0 absolute top-0 left-0">
                <img
                    src={`${TMDB_IMAGE_BASE_URL}/${BACKDROP_SIZE}${featuredMovie.backdrop_path ?? ""}`}
                    alt="Hero"
                    className="w-full h-auto object-cover"
                />
            </div>
            {/* Show Info */}
            <div className="relative w-full h-screen bg-linear-40 from-black via-black/40 to-transparent flex flex-col items-start justify-center overflow-hidden">
                <div className="z-10 px-8 text-white flex flex-col items-start">
                    <h1 className="text-5xl font-bold mb-4 pt-16 max-w-sm">{featuredMovie.title}</h1>
                    <p className="text-xl mb-2 flex items-center">
                        <span>
                            <Star className="mx-1" />
                        </span>
                        {featuredMovie.vote_average?.toFixed(2) ?? "0.00"}/10 ({featuredMovie.vote_count ?? 0}) {featuredMovie.runtime ?? ""}
                    </p>
                    <p className="text-md text-gray-300 pb-2">{featuredMovie.release_date?.slice(0, 4) ?? ""}</p>
                    <p className="text-lg mb-4 max-w-lg">{featuredMovie.overview}</p>
                </div>
                <div className="relative w-full px-8 flex flex-row gap-4">
                    {genreNames.map((genre, index) => (
                        <div key={`${index}`} className="glass rounded-full p-2 flex justify-center items-center">
                            <span className="text-xs text-gray-300">
                                {genre}
                            </span>
                        </div>

                    ))}
                </div>
            
                {/*Trailer Button*/}
                <div className="relative w-full px-8 flex flex-row gap-4 mt-4">
                    <Button size="default" onClick={handleWatchTrailer}>
                        Watch Trailer
                    </Button>
                </div>
            </div>
            {seeTrailer && trailer && (
                <div className="fixed inset-0 z-20 bg-black/80 flex items-center justify-center p-4">
                    <YouTube
                        videoId={trailer.key}
                        opts={{
                            width: "100%",
                            height: "100%"
                        }}
                        onEnd={() => setSeeTrailer(false)}
                    />
                </div>
            )}
        </div>
    );
};