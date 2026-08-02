import { Star } from "lucide-react";

export default function MovieCard({
    title,
    posterPath,
    rating,
    releaseDate,
    className = "",
}) {

    const year = releaseDate?.split("-")[0] ?? "—";
    return (
        <div>
            <img />

            <div>
                <span><Star /> {rating}</span>

                <h3>{title}</h3>

                <p>{year}</p>
            </div>
        </div>
    )
}