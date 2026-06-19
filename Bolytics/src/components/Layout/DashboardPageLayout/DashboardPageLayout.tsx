import "../../../styles/index.css";

import Header from "../Header/Header";
import SideNavBar from "../SideNavBar/SideNavBar";

import TabContextProvider from '../../../context/tabNavigation';

type DashboardPageLayoutProp = {
    children: React.ReactElement;
    tabs: {
        title: string;
        Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }[];
}

function DashboardPageLayout({ children, tabs }: DashboardPageLayoutProp) {
    return (
        <TabContextProvider>
            <div className="bg-bg-dark w-[100vw] h-[100vh] text-text overflow-x-hidden">
                <Header />

                <div className="flex flex-col">
                    <SideNavBar tabs={tabs} />

                    <div className="grow-1">
                        {children}
                    </div>
                </div>
            </div>
        </TabContextProvider>
    )
}

export default DashboardPageLayout;