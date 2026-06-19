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
        <div className="bg-bg flex flex-col items-center gap-y-4">

            <ImageButton Image={LeftArrow} onClick={() => setIsCollapsed(!isCollapsed)}
                className={`transition-transform duration-[0.25s] ${isCollapsed ? 'rotate-180' : 'mr-[-90%]'} mt-4 hidden`} />

            <ul className="flex justify-between sticky top-0 overflow-x-auto scroll-auto no-scrollbar w-full">
                {tabs.map((tab,index) => {
                    return <SideNavBarTab key={tab.title} title={tab.title} index={index}/>
                })}
            </ul>
        </div>
    )
}

export default SideNavBar;