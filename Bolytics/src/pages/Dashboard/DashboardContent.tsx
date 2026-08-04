import { useContext } from "react"
import { TabNavigationContext } from "../../hooks/context/TabNavigationContext"
import { DashboardTabState } from "../../lib/enums"
import "../../styles/index.css"
import HomeSubPage from "./HomeSubPage"
import PlayerSubPage from "./PlayerSubPage"
import ScoresSubPage from "./ScoresSubPage"
import SeasonSubPage from "./SeasonSubPage"
import TeamSubPage from "./TeamSubPage"

function DashboardContent() {
    const nav = useContext(TabNavigationContext);
    
    const SubPage: React.ReactNode = getSubPage(nav?.curTab);

    return (
        <div className="p-4 w-full h-full">
            {SubPage}
        </div>
    )
}

const getSubPage = (tab: string | undefined): React.ReactNode => {
    switch (tab) {
        case DashboardTabState.HOME:
            return <HomeSubPage />
        case DashboardTabState.PLAYERS:
            return <PlayerSubPage />
        case DashboardTabState.TEAMS:
            return <TeamSubPage />
        case DashboardTabState.SEASON:
            return <SeasonSubPage />
        case DashboardTabState.SCORES:
            return <ScoresSubPage />;
        default:
            return <HomeSubPage />
    }
}

export default DashboardContent;