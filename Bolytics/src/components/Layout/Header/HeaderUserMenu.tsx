import { useState } from "react";
import "../../../styles/index.css";

import PrimaryButton from "../../UI/PrimaryButton";
import UserProfile from "../UserProfile/UserProfile";


function HeaderUserMenu() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (

        <div className="justify-self-end">
            {isLoggedIn ? 
                <div className="flex gap-2 items-center">
                    <span>Lopez, George</span>
                    <UserProfile onClick={() => setIsLoggedIn(false)}/>
                </div> 
                :
                <div className="flex gap-x-2">
                    <PrimaryButton onClick={() => setIsLoggedIn(true)} text="Log In" 
                        className="px-[8px] py-[2px]" />
                    <PrimaryButton onClick={() => setIsLoggedIn(true)} text="Sign Up" 
                        className="px-[8px] py-[2px]" />
                </div>
            }
        </div>
    )
}

export default HeaderUserMenu;