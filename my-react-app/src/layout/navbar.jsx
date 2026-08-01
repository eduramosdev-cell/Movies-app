import { NavLogo } from "./NavLogo"
import { NavLinks } from "./NavLinks"
import { NavActions } from "./NavActions"

export const NavBar = () => {
    return <div className="container-app sticky top-0 z-50 glass border-background w-full h-15 mx-auto py-2 bg-background flex flex-row items-center justify-between">
        <NavLogo />
        <NavLinks />
        <NavActions />
    </div>
}