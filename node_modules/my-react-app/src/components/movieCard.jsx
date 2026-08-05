import { Star } from "lucide-react";

export default function MovieCard({
    title,
    posterPath,
    rating,
    releaseDate,
    className = "",
}) {

    const year = releaseDate?.split("-")[0] ?? "—";
    const score = rating?.toFixed(1) ?? "N/A";
    return (
        <div className={`
        w-72
        overflow-hidden
        rounded-(--radius)
        bg-card
        border
        border-muted
        hover:scale-101
        duration-300
        shadow-md
        ${className}
        `}>
            <img 
                src={posterPath}
                alt={title || "Untitled"}
                className="aspect-2/2 w-full object-cover"
            />

            <div className="p-4 flex flex-col gap-2">
                <span className="flex items-center gap-1">
                    <Star /> {score}
                </span>

                <h3 className="
                    mt-3
                    font-display
                    text-lg
                    font-bold"
               >{title || "Untitled"}</h3>

                <p className="text-sm text-muted-foreground"
                >{year}</p>
            </div>
        </div>
    )
}