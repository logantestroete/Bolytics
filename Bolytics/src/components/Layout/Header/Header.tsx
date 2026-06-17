import "../../../styles/index.css";

import SiteLogo from "../../../assets/site_logo.svg?react";

import HeaderLinks from "./HeaderLinks";
import HeaderUserMenu from "./HeaderUserMenu";

function Header() {
    return (
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16 px-4 bg-bg">
            <SiteLogo className="justify-self-start size-[3rem]" />

            <HeaderLinks />

            <HeaderUserMenu />
        </div>
    )
}

export default Header;