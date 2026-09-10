export const NavLinks = () => {
    const links = [
        { label: "Home", id: "hero" },
        { label: "Popular", id: "popular" },
        { label: "Top Rated", id: "top-rated" },
        { label: "Upcoming", id: "upcoming" }
    ];

    return (
        <nav className="rounded-full p-3">
            <ul className="flex items-center gap-12">
                {links.map((link, idx) => (
                    <li key={idx}>
                        <a href={`/#${link.id}`} className="text-lg text-primary-foreground font-light mx-4 hover:text-primary-foreground/80 transition-colors duration-300">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};