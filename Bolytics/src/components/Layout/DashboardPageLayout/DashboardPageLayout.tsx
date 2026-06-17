import "../../../styles/index.css";

import Header from "../Header/Header";
import SideNavBar from "../SideNavBar/SideNavBar";

type DashboardPageLayoutProp = {
    children: React.ReactElement;
    tabs: {
        title: string;
        Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }[];
}

function DashboardPageLayout({children, tabs}: DashboardPageLayoutProp) {
    return (
        <div className="bg-bg-dark w-[100vw] h-[100vh] text-text overflow-x-hidden">
            <Header />

            <div className="flex">
                <SideNavBar tabs={tabs}/>

                <div className="grow-1">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardPageLayout;