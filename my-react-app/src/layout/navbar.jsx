import { NavLogo } from "./NavLogo"
import { NavLinks } from "./NavLinks"
import { NavActions } from "./NavActions"

export const NavBar = () => {
    return <div className="container-app fixed inset-x-0 top-0 z-50 w-full h-15 mx-auto py-2 bg-linear-to-b from-background via-background/50 to-transparent flex flex-row items-center justify-between">
        <NavLogo />
        <NavLinks />
        <NavActions />
    </div>
}