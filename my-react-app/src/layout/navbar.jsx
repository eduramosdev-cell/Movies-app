import { NavLogo } from "./NavLogo"
import { NavLinks } from "./navLinks"
import { NavActions } from "./NavActions"

export const NavBar = () => {
    return <div className="max-w-none px-0 fixed inset-x-0 top-0 z-50 w-full h-25 mx-auto py-2 bg-linear-to-b from-black via-black/50 to-transparent flex flex-row items-center justify-between">
        <NavLogo/>
        <NavLinks />
        <NavActions />
    </div>
}