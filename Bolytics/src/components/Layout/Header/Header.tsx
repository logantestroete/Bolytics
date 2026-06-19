import "../../../styles/index.css";
import HeaderStyles from "./componentStyles";

import SiteLogo from "../../../assets/site_logo.svg?react";
import MenuIcon from "../../../assets/menu.svg?react"

import HeaderLinks from "./HeaderLinks";
import HeaderUserMenu from "./HeaderUserMenu";

import { useState } from "react";

function Header() {
    const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
    return (
        <div className={`${HeaderStyles.headerContainer}`}>
            <div className={`${HeaderStyles.logoAndMenuContainer}`}>
                <SiteLogo className="size-[3rem] ml-1" />
                <MenuIcon className={`${isHeaderMenuOpen ? 'rotate-90' : ''} ${HeaderStyles.menuIcon}`} 
                    onClick={() => setIsHeaderMenuOpen(!isHeaderMenuOpen)}/>
            </div>
            <div className={`${HeaderStyles.linksUserMenuContainer} ${isHeaderMenuOpen ? '' : 'translate-x-full'}`}>
                <HeaderLinks />
                <HeaderUserMenu />
            </div>
        </div>
    )
}

export default Header;