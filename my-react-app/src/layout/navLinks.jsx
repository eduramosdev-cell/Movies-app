export const NavLinks = () => {
    const links = [
        { label: "Home" },
        { label: "Movies" },
        { label: "TV Shows" },
    ];

    return (
        <div className="flex items-center gap-6">
            {links.map((link, idx) => (
                <a href={`/${link.label.toLowerCase()}`} key={idx} className="text-lg text-primary-foreground font-light">
                    {link.label}
                </a>
            ))}
        </div>
    );
};