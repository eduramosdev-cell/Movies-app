export const NavLogo = () => {
    return <div className="flex items-center gap-2 pl-8">
        <div className="overflow-hidden">
            <a href="#">
                <img src="public/Movie-app-logo.png" className="h-12 w-auto rounded-3xl scale-125 " />
            </a>
        </div>
        <h2 className="text-xl text-highlight glow-text tracking-tight hover:text-foreground transition-all font-semibold font-display">
            CineVerse
        </h2>
    </div>
}