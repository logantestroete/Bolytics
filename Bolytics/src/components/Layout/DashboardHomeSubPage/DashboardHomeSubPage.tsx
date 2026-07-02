import "../../../styles/index.css"
import DashboardHomePlayerLeaders from "./DashboardHomePlayerLeaders";
import DashboardHomeStandings from "./DashboardHomeStandings";
import FavoriteTeam from "./FavoriteTeam";



function DashboardHomeSubPage() {
    return (
        <div className="grid grid-cols-[1fr] gap-2 py-2">
            <div className="grid grid-cols-[1fr] gap-2">
                <FavoriteTeam />
                <DashboardHomeStandings />
            </div>
            <div>
                <DashboardHomePlayerLeaders />
            </div>
        </div>
    )
}

export default DashboardHomeSubPage;