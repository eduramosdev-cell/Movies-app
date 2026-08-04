import { MockApi } from "../MockApi/Mock.jsx";
import poster from "../MockApi/MoviePoster.jpg";

export const Hero = () => {
    return <div className="relative w-full bg-background flex flex-col items-center justify-center overflow-hidden">
        {/* Hero img */}
        <div className="w-full -mt-16">
            <img src={poster} alt="Hero" className="w-full h-auto object-cover" />
        </div>
    </div>
}