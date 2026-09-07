export const NavLinks = () => {
    const links = [
        { label: "Home", id: "hero" },
        { label: "Popular", id: "popular" },
        { label: "Top Rated", id: "top-rated" },
        { label: "Upcoming", id: "upcoming" }
    ];

    return (
        <div className="rounded-full p-3">
            <div className="flex items-center gap-12">
                {links.map((link, idx) => (
                    <a href={`/#${link.id}`} key={idx} className="text-lg text-primary-foreground font-light mx-4 hover:text-primary-foreground/80 transition-colors duration-300">
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
};