import "../../../styles/index.css"
import DashboardHomeStandings from "./DashboardHomeStandings";
import FavoriteTeam from "./FavoriteTeam";



function DashboardHomeSubPage() {
    return (
        <div className="p-2 grid grid-cols-[1fr] gap-2">
            <FavoriteTeam />
            <DashboardHomeStandings />
        </div>
    )
}

export default DashboardHomeSubPage;