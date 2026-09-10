export const NavLogo = () => {
    return <div className="flex items-center gap-2 pl-8">
        <div className="flex flex-row justify-between items-center gap-3 cursor-pointer">
            <div className="rounded-2xl w-auto overflow-hidden">
                <a href="#">
                    <img src="public/Movie-app-logo.png" className="h-12 w-auto rounded-2xl scale-125 " alt="logo" />
                </a>
            </div>

            <h2 className="text-xl text-highlight glow-text tracking-tight hover:text-foreground transition-all font-semibold font-display">
            CineVerse
            </h2>
        </div>
    </div>
}