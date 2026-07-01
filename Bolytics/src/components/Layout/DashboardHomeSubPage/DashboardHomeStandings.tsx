/* eslint-disable @typescript-eslint/no-unused-vars */
import '../../../styles/index.css'

import { useContext } from 'react'
import CardHeader from '../../UI/CardHeader';
import { ThemeContext } from '../../../context/themeContext';
import CardContainer from '../../UI/CardContainer';
import TableDataColumn from '../../UI/TableDataColumn';
import TableHeaderColumn from '../../UI/TableHeaderColumn';

type Props = {
    teamName: string;
    wins: string;
    losses: string;
    pct: string;
    gb: string;
    strk: string
}

const teams: Props[] = [
    {
        teamName: 'TEX',
        wins: "45",
        losses: '45',
        pct: '.500',
        gb: '-',
        strk: 'L10'
    },
    {
        teamName: 'TEX',
        wins: "45",
        losses: '45',
        pct: '.500',
        gb: '-',
        strk: 'L10'
    },
    {
        teamName: 'TEX',
        wins: "45",
        losses: '45',
        pct: '.500',
        gb: '-',
        strk: 'L10'
    },
    {
        teamName: 'TEX',
        wins: "45",
        losses: '45',
        pct: '.500',
        gb: '-',
        strk: 'L10'
    },
    {
        teamName: 'TEX',
        wins: "45",
        losses: '45',
        pct: '.500',
        gb: '-',
        strk: 'L10'
    }
]

function DashboardHomeStandings() {
    const t = useContext(ThemeContext)
    return (
        <CardContainer className={`grid grid-cols-[1fr] gap-y-3 overflow-x-auto scroll-smooth no-scrollbar`}>
            <CardHeader text='AL West Standings' className='justify-self-start'/>

            <table className={`w-[100%] table-auto text-left`}>
                <thead>
                    <tr className={`${t?.theme.border} border-b`}>
                        <TableHeaderColumn value="Team" />
                        <TableHeaderColumn value="W" />
                        <TableHeaderColumn value="L" />
                        <TableHeaderColumn value="Pct" />
                        <TableHeaderColumn value="GB" />
                        <TableHeaderColumn value="Strk" />
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team,index) => {
                        return (
                            <tr key={`homeStandings${team}${index}`} className={`${(index !== teams.length - 1) ? 'border-b':''} ${t?.theme.border}`}>
                                <td className={`flex gap-x-2 items-center py-4 ${t?.theme.border} border-r`}>
                                    <div className={`w-[1.5rem] h-[1.5rem] rounded-full ${t?.theme.bgLight}`}></div>
                                    <span className='text-sm font-semibold'>{team.teamName}</span>
                                </td>
                                <TableDataColumn value={team.wins} />
                                <TableDataColumn value={team.losses} />
                                <TableDataColumn value={team.pct} />
                                <TableDataColumn value={team.gb} />
                                <TableDataColumn value={team.strk} />
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </CardContainer>
    )
}

export default DashboardHomeStandings;