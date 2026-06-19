import { useState } from "react";
import "../../../styles/index.css";


function HeaderUserMenu() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <div className="justify-self-end">
            {isLoggedIn ? 
            <button onClick={() => setIsLoggedIn(false)}>
                Profile
            </button> :
            <button onClick={() => setIsLoggedIn(true)}>
                Login
            </button>}
        </div>
    )
}

export default HeaderUserMenu;