import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { fetchTrendingActors } from "../api/moviesApi";
import ActorCard from "../components/actorCard.jsx";

export const TrendingActors = () => {

    const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
    const POSTER_SIZE = "w500";
    const BACKDROP_SIZE = "w1280";
    const PROFILE_SIZE = "w185";

    const [trendingActors, setTrendingActors] = useState([]);

    useEffect(() => {
        async function loadData() {
            const result = await fetchTrendingActors();
            setTrendingActors(result);
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

    return (
        <div className="relative w-full h-auto bg-background flex flex-col items-center justify-center">
            <div className="w-full flex flex-row justify-start items-center">
                <h2 className="text-3xl py-3 px-8">Trending Actors</h2>
            </div>
            <div className="relative w-full">
                <div className="w-full h-max flex items-center justify-start gap-4 py-2 px-2 relative overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
                    ref={carousel}>
                    {trendingActors.map((actor) => (
                        <div key={actor.id} className="w-full h-120">
                            <ActorCard
                                name={actor.name}
                                profilePath={`${TMDB_IMAGE_BASE_URL}/${PROFILE_SIZE}${actor.profile_path}`}
                                knownForDepartment={actor.known_for_department}                            
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
        </div>
    );
};