export const NavLinks = () => {
    const links = [
        { label: "Home" },
        { label: "Movies" },
        { label: "TV Shows" },
    ];

    return (
        <div className="rounded-full p-3">
            <div className="flex items-center gap-12">
                {links.map((link, idx) => (
                    <a href={`/${link.label.toLowerCase()}`} key={idx} className="text-lg text-primary-foreground font-light mx-4 hover:text-primary-foreground/80 transition-colors duration-300">
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
};