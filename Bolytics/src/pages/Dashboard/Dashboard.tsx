import TabbedPage from "../../components/Layout/TabbedPage/TabbedPage";
import { DashboardTabState } from "../../lib/enums";
import { IoPersonOutline, IoHomeOutline, IoPeopleOutline, IoCalendarOutline } from "react-icons/io5";
import { MdOutlineScoreboard } from 'react-icons/md'
import DashboardContent from "./DashboardContent";

function Dashboard() {
    const tabs = [
        { name: DashboardTabState.HOME, Icon: IoHomeOutline },
        { name: DashboardTabState.PLAYERS, Icon: IoPersonOutline },
        { name: DashboardTabState.TEAMS, Icon: IoPeopleOutline },
        { name: DashboardTabState.SEASON, Icon: IoCalendarOutline },
        { name: DashboardTabState.SCORES, Icon: MdOutlineScoreboard }
    ];

    return (
        <TabbedPage startingTab={DashboardTabState.HOME} tabs={tabs}>
            <DashboardContent />
        </TabbedPage>
    )
};



export default Dashboard;