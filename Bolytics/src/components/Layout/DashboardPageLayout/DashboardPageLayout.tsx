import { useContext } from "react";
import "../../../styles/index.css";

import Header from "../Header/Header";
import SideNavBar from "../SideNavBar/SideNavBar";
import { ThemeContext } from "../../../context/themeContext";



type DashboardPageLayoutProp = {
    children: React.ReactElement;
    tabs: string[];
}

function DashboardPageLayout({ children, tabs }: DashboardPageLayoutProp) {
    const t = useContext(ThemeContext);

    return (
        <div className={`${t?.theme.bgDark} w-[100vw] h-[100vh] text-text overflow-x-hidden`}>
            <Header />
            
            <div className="flex flex-col">
                <SideNavBar tabs={tabs} />

                <div className="grow-1">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardPageLayout;