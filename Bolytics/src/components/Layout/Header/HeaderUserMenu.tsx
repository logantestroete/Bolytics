import { useState } from "react";
import "../../../styles/index.css";


function HeaderUserMenu() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <div className="justify-self-end">
            {isLoggedIn ? 
            <div onClick={() => setIsLoggedIn(true)}>
                Things
            </div> :
            <div onClick={() => setIsLoggedIn(false)}>
                Not Logged In
            </div>}
        </div>
    )
}

export default HeaderUserMenu;