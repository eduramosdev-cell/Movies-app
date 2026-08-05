import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import poster from "../MockApi/SpidermanPoster.jpg";
import { fetchNowPlaying } from "../api/moviesApi";

export const Hero = () => {

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

    return <div className="relative w-full bg-background flex flex-col items-center justify-center overflow-hidden">
        {/* Hero img */}
        <div className="w-full z-0 absolute top-0 left-0">
            <img src={`${TMDB_IMAGE_BASE_URL}/${BACKDROP_SIZE}${nowPlaying[0]?.backdrop_path}`} alt="Hero" className=" object-cover" />
        </div>
        {/* Show Info */}
        <div className="relative w-full h-screen bg-linear-40 from-black via-black/40 to-transparent flex flex-col items-start justify-center overflow-hidden">
        <div className="z-10 p-8 text-white flex flex-col items-start">
            <h1 className="text-5xl font-bold mb-4 pt-16 max-w-sm">{nowPlaying[0]?.title}</h1>
            <p className="text-xl mb-2 flex items-center"><span><Star className="mx-1" /></span>{nowPlaying[0]?.vote_average}/10 ({nowPlaying[0]?.vote_count}) {nowPlaying[0]?.runtime} </p> 
            <p className="text-md text-gray-300 pb-2">{nowPlaying[0]?.release_date.slice(0, 4)}</p>
            <p className="text-lg mb-4 max-w-md">{nowPlaying[0]?.overview}</p>
        </div>
        </div>
    </div>
}