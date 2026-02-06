import "./DivisionStandingsLayout.css"
import type { TeamRecord } from "../Tools/Types"

type DivisionStandingsLayoutProp = {
    standings: TeamRecord[];
    divisionName: string;
}

const DivisionStandingsLayout: React.FC<DivisionStandingsLayoutProp> = ({ standings, divisionName }) => {
    return (
        <table className="ds-teamRecord-table">
            <colgroup>
                <col className="ds-teamRecord-row-teamName"/>
                <col />
                <col />
                <col />
                <col />
            </colgroup>
            <thead>
                <tr className="ds-teamRecord-row ds-teamRecord-header-row">
                    <td className="ds-teamRecord-header">{divisionName}</td>
                    <td>W-L</td>
                    <td>PCT</td>
                    <td>GB</td>
                    <td>STRK</td>
                </tr>
            </thead>
            {standings.map((teamRecord) => {
                return (
                    <tbody>
                        <tr className="ds-teamRecord-row" key={teamRecord.team.id}>
                            <td>{teamRecord.team.abbreviation}</td>
                            <td>{`${teamRecord.wins}-${teamRecord.losses}`}</td>
                            <td>{teamRecord.winningPercentage}</td>
                            <td>{teamRecord.gamesBack}</td>
                            <td>{teamRecord.streak.streakCode}</td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    )
}



export default DivisionStandingsLayout;