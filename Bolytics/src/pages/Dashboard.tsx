import DashboardPageLayout from "../components/Layout/DashboardPageLayout/DashboardPageLayout";

// Icon imports
import PlayerIcon from '../assets/player.svg?react';
import HomeIcon from '../assets/home.svg?react';
import TeamIcon from '../assets/team.svg?react';
import SeasonIcon from '../assets/season.svg?react';

const tabs = [
    { title: "Home", Icon: HomeIcon},
    { title: "Player", Icon: PlayerIcon},
    { title: "Team", Icon: TeamIcon},
    { title: "Season", Icon: SeasonIcon}
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