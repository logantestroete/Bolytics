import "../../../styles/index.css";

import SideNavBarTab from "./SideNavBarTab";
import LeftArrow from '../../../assets/arrow_left.svg?react';

import { useState } from "react";
import ImageButton from "../../UI/ImageButton";

// Prop Type
type SideNavBarProp = {
    tabs: {
        title: string;
        Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }[]
}


function SideNavBar({tabs}: SideNavBarProp) {
    // State Variables
    const [isCollapsed, setIsCollapsed] = useState(false);


    return (
        <div className="bg-bg md:h-[100vh] px-[clamp(0.5rem,1vw,1.5rem)] flex flex-col items-center gap-y-4">

            <ImageButton Image={LeftArrow} onClick={() => setIsCollapsed(!isCollapsed)}
                className={`transition-transform duration-[0.25s] ${isCollapsed ? 'rotate-180' : 'mr-[-90%]'} mt-4 hidden md:block`} />

            <ul className="flex md:flex-col gap-y-3">
                {tabs.map(tab => {
                    return <SideNavBarTab key={tab.title} title={tab.title} Icon={tab.Icon} 
                        isCollapsed={isCollapsed} onClick={() => console.log("Tab changed: ", tab)}/>
                })}
            </ul>
        </div>
    )
}

export default SideNavBar;