import { Search } from "lucide-react"

export const NavActions = () => {
    return <div className="justify-center gap-3 pr-8">
        <button className="flex flex-row gap-6 text-lg text-primary-foreground items-center font-sans font-light hover:text-primary-foreground/80 transition-colors duration-300">
            Search <Search />
        </button>
    </div>
}