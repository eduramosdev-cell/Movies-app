import { X, Star, Calendar, Globe, AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export function BigModal({
    title,
    backdropPath, // Wide hero/video banner image
    posterPath,   // Vertical cover art
    rating,
    releaseDate,
    overview,
    language,
    adult,
    onClose,
    className = "",
}) {
    // Prevent background scrolling while modal is open & add Escape key listener
    useEffect(() => {
        document.body.style.overflow = "hidden";
        
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose?.();
        };
        window.addEventListener("keydown", handleKeyDown);
        
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    // Data formatting strictly matching your Card rules
    const year = releaseDate?.split("-")[0] ?? "—";
    const numericRating = typeof rating === "number" ? rating : Number(rating);
    const score = Number.isFinite(numericRating) ? numericRating.toFixed(1) : "N/A";
    const displayLanguage = language ? String(language).toUpperCase() : "—";

    return (
        <div 
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs animate-fade-in"
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className={`
                    relative
                    flex
                    h-[85vh]
                    w-full
                    max-w-4xl
                    flex-col
                    overflow-y-auto
                    rounded-(--radius)
                    border
                    border-muted
                    bg-card
                    text-card-foreground
                    shadow-2xl
                    ${className}
                `}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs transition duration-200 hover:bg-black/80 hover:scale-105"
                >
                    <X size={20} />
                </button>

                {/* 1. VIDEO / HERO AREA (Aspect Ratio 16:9 ready for future video player replacement) */}
                <div className="relative w-full aspect-video bg-black shrink-0">
                    {/* FUTURE VIDEO NOTE: Delete this <img> below and replace it with your video player/iframe when ready */}
                    <img 
                        src={backdropPath || "https://placehold.co"}
                        alt={`${title || "Movie"} backdrop`}
                        className="h-full w-full object-cover"
                    />
                    {/* Bottom gradient fade to softly match the card background */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-card to-transparent" />
                </div>

                {/* 2. MEDIA DETAILS BLOCK */}
                <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8 grow">
                    
                    {/* Left Column: Mini Poster Display */}
                    <div className="hidden sm:block w-40 shrink-0">
                        <img 
                            src={posterPath || "https://placehold.co"}
                            alt={`${title || "Movie"} poster`}
                            className="w-full aspect-2/3 object-cover rounded-(--radius) border border-muted shadow-md"
                        />
                    </div>

                    {/* Right Column: Detailed Text Information */}
                    <div className="flex flex-col grow items-start text-left">
                        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight">
                            {title || "Untitled"}
                        </h2>
                        
                        {/* Meta Badge Row */}
                        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1 rounded bg-muted/50 px-2.5 py-1">
                                <Star size={16} className="text-amber-500 fill-amber-500" /> {score}
                            </span>
                            <span className="flex items-center gap-1 rounded bg-muted/50 px-2.5 py-1">
                                <Calendar size={16} /> {year}
                            </span>
                            <span className="flex items-center gap-1 rounded bg-muted/50 px-2.5 py-1">
                                <Globe size={16} /> {displayLanguage}
                            </span>
                            {adult && (
                                <span className="flex items-center gap-1 rounded bg-destructive/20 text-destructive border border-destructive/30 px-2 py-0.5 font-bold text-xs uppercase tracking-wider">
                                    <AlertTriangle size={14} /> 18+
                                </span>
                            )}
                        </div>

                        {/* Description Summary */}
                        <div className="mt-6 flex flex-col items-start w-full">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                Synopsis
                            </h4>
                            <p className="mt-2 text-base md:text-lg leading-relaxed text-foreground/90 max-w-2xl font-light">
                                {overview || "No plot summary available for this title."}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
