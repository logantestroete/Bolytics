import { TabContext } from "../../../context/tabNavigation";
import "../../../styles/index.css";

import { useContext } from 'react';

type SideNavBarTabProp = {
    title: string;
    index: number;
}

function SideNavBarTab({title, index}: SideNavBarTabProp) {
    const nav = useContext(TabContext);

    return (
        <li className={`hover:bg-bg-light hover:cursor-pointer flex py-4 w-[90px] shrink-0 ${nav?.cur === index ? 'border-b-2' : 'border-b-none'}`}>
            <button onClick={() => nav?.setCur(index)} className="m-auto">{title}</button>
        </li>
    )
}

export default SideNavBarTab;