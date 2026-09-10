import { NavLogo } from "./NavLogo"
import { NavLinks } from "./navLinks"
import { NavActions } from "./NavActions"
import { useEffect, useState } from "react"

export const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return <nav aria-label="Primary navigation" className={`max-w-none px-0 fixed inset-x-0 top-0 z-50 w-full h-15 mx-auto py-2 bg-linear-to-b from-background via-background/50 to-background/0 flex flex-row items-center justify-between animate-fade-in transition-all duration-200 ease-in-out ${isScrolled ? "glass py-3" : "py-2 ease-out"}`}>
        <NavLogo/>
        <NavLinks />
        <NavActions />
    </nav>
}