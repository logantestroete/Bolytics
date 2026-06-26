import "../../../styles/index.css"
import FavoriteTeam from "./FavoriteTeam";



function DashboardHomeSubPage() {
    return (
        <div className="p-2 grid grid-cols-[1fr] gap-2">
            <FavoriteTeam />
        </div>
    )
}

export default DashboardHomeSubPage;