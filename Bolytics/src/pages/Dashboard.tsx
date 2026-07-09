import DashboardHomeSubPage from "../components/Layout/DashboardHomeSubPage/DashboardHomeSubPage";
import DashboardPageLayout from "../components/Layout/DashboardPageLayout/DashboardPageLayout";

import TabContextProvider from '../context/tabNavigation';

const tabs = [
    "Home",
    "Player",
    "Team",
    "Standings",
    "Season"
];

function Dashboard() {
    return (
        <TabContextProvider>
            <DashboardPageLayout tabs={tabs}>
                <DashboardHomeSubPage />
            </DashboardPageLayout>
        </TabContextProvider>
    )
}

export default Dashboard;