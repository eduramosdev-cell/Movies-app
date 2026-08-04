import { Star } from "lucide-react";
import poster from "../MockApi/SpidermanPoster.jpg";
import secondPoster from "../MockApi/MoviePoster.jpg";
import MovieCard from "../components/MovieCard.jsx";
import { movies } from "../api/moviesApi.js";

export const Trending = () => {

    const MockApi =  {
    rating: 8.5,
    voters: 1200,
    duration: "2h 30m",
    description: "A thrilling adventure of a young hero who must save the world from impending doom. With breathtaking visuals and a gripping storyline, this movie is a must-watch for fans of action and fantasy.",
    title: "The Hero's Journey",
    releaseDate: "2023-05-15",
}

    return <div className="relative w-full bg-background flex flex-col items-center justify-center overflow-hidden">
        <div className="z-10 p-8 text-white flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>
            {/*Movie cards */}
            <div className="flex flex-wrap gap-4">
                {MovieCard({
                title: MockApi.title,
                posterPath: secondPoster,
                rating: MockApi.rating,
                releaseDate: MockApi.releaseDate,
                className: "mt-4"
            })}
            {MovieCard({
                title: MockApi.title,
                posterPath: secondPoster,
                rating: MockApi.rating,
                releaseDate: MockApi.releaseDate,
                className: "mt-4"
            })}
            {MovieCard({
                title: MockApi.title,
                posterPath: secondPoster,
                rating: MockApi.rating,
                releaseDate: MockApi.releaseDate,
                className: "mt-4"
            })}
            {MovieCard({
                title: MockApi.title,
                posterPath: secondPoster,
                rating: MockApi.rating,
                releaseDate: MockApi.releaseDate,
                className: "mt-4"
            })}
            </div>
        </div>
        <div>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                {movies}
            </p>
        </div>
    </div>
}