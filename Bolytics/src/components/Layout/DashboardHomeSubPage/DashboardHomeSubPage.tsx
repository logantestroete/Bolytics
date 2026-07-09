import "../../../styles/index.css"
import DashboardHomePlayerLeaders from "./DashboardHomePlayerLeaders";
import DashboardHomeStandings from "./DashboardHomeStandings";
import DashboardHomeStatOfTheDay from "./DashboardHomeStatOfTheDay";
import DashboardHomeTodaysGames from "./DashboardHomeToday'sGames";
import DashboardHomeTrendingTeams from "./DashboardHomeTrendingTeams/DashboardHomeTrendingTeams";
import FavoriteTeam from "./FavoriteTeam";



function DashboardHomeSubPage() {
    return (
        <div className="grid grid-cols-[1fr] gap-2 py-2">
            <div className="grid grid-cols-[1fr] gap-2">
                <FavoriteTeam />
                <DashboardHomeStandings />
            </div>
            <DashboardHomeStatOfTheDay />
            <DashboardHomeTodaysGames />
            <div className="grid grid-cols-[1fr] gap-2">
                <DashboardHomePlayerLeaders />
                <DashboardHomeTrendingTeams />
            </div>
        </div>
    )
}

export default DashboardHomeSubPage;