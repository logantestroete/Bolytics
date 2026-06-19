import DashboardPageLayout from "../components/Layout/DashboardPageLayout/DashboardPageLayout";

const tabs = [
    "Home",
    "Player",
    "Team",
    "Standings",
    "Season"
];

function Dashboard() {
    return (
        <DashboardPageLayout tabs={tabs}>
            <div>

            </div>
        </DashboardPageLayout>
    )
}

export default Dashboard;