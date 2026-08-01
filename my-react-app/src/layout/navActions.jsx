import { Search } from "lucide-react"

export const NavActions = () => {
    return <div className="justify-center gap-3">
        <button className="flex flex-row gap-6 text-lg text-primary-foreground items-center font-sans font-light">
            Search <Search />
        </button>
    </div>
}