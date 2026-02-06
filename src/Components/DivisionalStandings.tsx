import "./DivisionalStandings.css"
import DivisionStandingsLayout from "./DivisionStandingsLayout";
import { useState } from "react";
import type { DivisionStandings } from "../Tools/Types";

type DivisionalStandingsProps = {
    standings: DivisionStandings[];
}

const DivisionalStandings: React.FC<DivisionalStandingsProps> = ({ standings }) => {
    const [activeStandings, setActiveStandings] = useState(true);
    console.log(standings)

    const StandingsTabClicked = () => {
        setActiveStandings((prev) => !prev);
    }
    

    return (
        <div className="ds-container">
            <div className="ds-league-btn-container">
                <button className={`ds-al-btn ds-btn ${activeStandings ? "active-ds-btn" : "inactive-ds-btn"}`}
                    onClick={StandingsTabClicked}>AL</button>
                <button className={`ds-nl-btn ds-btn ${!activeStandings ? "active-ds-btn" : "inactive-ds-btn"}`}
                    onClick={StandingsTabClicked}>NL</button>
            </div>
            <div className={`al-table-container ds-table-container ${activeStandings ? "active-ds-table" : "inactive-ds-table"}`}>
                <DivisionStandingsLayout standings={standings[0].teamRecords} divisionName={standings[0].division.nameShort} />
                <DivisionStandingsLayout standings={standings[1].teamRecords} divisionName={standings[1].division.nameShort} />
                <DivisionStandingsLayout standings={standings[2].teamRecords} divisionName={standings[2].division.nameShort} />
            </div>
            <div className={`nl-table-container ds-table-container ${!activeStandings ? "active-ds-table" : "inactive-ds-table"}`}>
                <DivisionStandingsLayout standings={standings[3].teamRecords} divisionName={standings[3].division.nameShort} />
                <DivisionStandingsLayout standings={standings[4].teamRecords} divisionName={standings[4].division.nameShort} />
                <DivisionStandingsLayout standings={standings[5].teamRecords} divisionName={standings[5].division.nameShort} />
            </div>
        </div>
    );
}
export default DivisionalStandings;