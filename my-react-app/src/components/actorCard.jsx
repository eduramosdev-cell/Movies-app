import { Film } from "lucide-react";

export default function ActorCard({
    name,
    profilePath,
    knownForDepartment,
    className = "",
}) {
    // Fallback profile if image path is missing or incomplete
    const imageUrl = profilePath?.includes("null") || !profilePath
        ? "https://unsplash.com"
        : profilePath;

    const department = knownForDepartment ?? "Acting";

    return (
        <div className={`
        w-44
        flex
        flex-col
        items-center
        justify-start
        text-center
        p-2
        rounded-xl
        hover:bg-muted/30
        transition-all
        duration-300
        ${className}
        `}>
            {/* Circular Photo Container */}
            <div className="
                relative
                w-32
                h-32
                rounded-full
                overflow-hidden
                border-2
                border-muted
                shadow-md
                hover:scale-105
                duration-300
            ">
                <img 
                    src={imageUrl}
                    alt={name || "Unknown"}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Actor Info */}
            <div className="mt-3 flex flex-col items-center w-full">
                <h3 className="
                    font-display
                    text-base
                    font-bold
                    text-card-foreground
                    line-clamp-1
                    w-full"
                >
                    {name || "Unknown"}
                </h3>

                <p className="text-xs font-medium text-amber-500 mt-0.5">
                    {department}
                </p>
            </div>
        </div>
    )
}