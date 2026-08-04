import { Star } from "lucide-react";
import poster from "../MockApi/SpidermanPoster.jpg";

export const Hero = () => {

    const MockApi =  {
    rating: 8.5,
    voters: 1200,
    duration: "2h 30m",
    description: "A thrilling adventure of a young hero who must save the world from impending doom. With breathtaking visuals and a gripping storyline, this movie is a must-watch for fans of action and fantasy.",
    title: "The Hero's Journey",
    releaseDate: "2023-05-15",
}

    return <div className="relative w-full bg-background flex flex-col items-center justify-center overflow-hidden">
        {/* Hero img */}
        <div className="w-full z-0 absolute top-0 left-0">
            <img src={poster} alt="Hero" className="w-full h-auto object-cover" />
        </div>
        {/* Show Info */}
        <div className="relative w-full h-screen bg-linear-40 from-black via-black/40 to-transparent flex flex-col items-start justify-center overflow-hidden">
        <div className="z-10 p-8 text-white flex flex-col items-start">
            <h1 className="text-5xl font-bold mb-4 pt-16">{MockApi.title}</h1>
            <p className="text-xl mb-2 flex items-center"><span><Star className="mx-1" /></span>{MockApi.rating}/10 ({MockApi.voters}) {MockApi.duration} </p> 
            <p className="text-md text-gray-300 pb-2">{MockApi.releaseDate.slice(0, 4)}</p>
            <p className="text-lg mb-4 max-w-md">{MockApi.description}</p>
        </div>
        </div>
    </div>
}