/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from 'react'
import '../../../styles/index.css'
import CardContainer from '../../UI/CardContainer'
import CardHeader from '../../UI/CardHeader'
import DropdownMenu from '../../UI/DropdownMenu'
import { ThemeContext } from '../../../context/themeContext'
import TableHeaderColumn from '../../UI/TableHeaderColumn'
import TableDataColumn from '../../UI/TableDataColumn'

const statTypes: string[] = [
    "AVG",
    "OPS",
    "SLG",
    "HITS",
    "RBI",
    "HR"
]

function DashboardHomePlayerLeaders() {
    const [selectedStat, setSelectedStat] = useState<string>(statTypes[0]);
    const t = useContext(ThemeContext);

    return (
        <CardContainer className={`grid grid-cols-[1fr] gap-y-4 ${t?.theme.text}`}>
            <div className='flex w-[100%]'>
                <CardHeader text="Player Stat Leaders" className='justify-self-start mr-auto' />
                <DropdownMenu values={statTypes} setValue={setSelectedStat} />
            </div>
            <div className='grid grid-cols-[1fr] gap-y-2'>
                <div className={`flex flex justify-between items-center ${t?.theme.border} border-b gap-y-2 py-2`} >
                    <div className={`flex gap-x-4 items-center ${t?.theme.primaryBorder} border-r-1 pr-8 grow-1 shrink-1`}>
                        <div className={`grid grid-cols-[1fr] place-items-center gap-y-2`}>
                            <div className={`flex justify-center items-center border-${t?.theme.primary} border-2 w-[5rem] h-[5rem] rounded-full p-1`}>
                                <div className={`rounded-full w-[90%] h-[90%] ${t?.theme.bgLight}`}>

                                </div>
                            </div>
                            <div className={`${t?.theme.bgPrimary} px-3 rounded-full text-sm`}>#1</div>
                        </div>
                        <div>
                            <div className={`text-[clamp(1.25rem,1rem+1vw,1.5rem)] font-semibold `}>Y. Yamamoto</div>
                            <div className={`text-sm text-start ${t?.theme.textMuted} pb-3`}>LAD</div>
                        </div>
                    </div>
                    <div className={`font-semibold text-[2rem] mx-auto text-center grow-1`}>0.311</div>
                </div>
                <div className={`min-w-0 overflow-x-auto`}>
                    <table className='w-[100%] table-fixed'>
                        <thead>
                            <tr>
                                <TableHeaderColumn value='RNK' className={`w-1/6`} />
                                <TableHeaderColumn value='PLAYER' className={`w-3/6`} />
                                <TableHeaderColumn value='TEAM' className={`w-1/6`} />
                                <TableHeaderColumn value={selectedStat} className={`w-1/6`} />
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={`${t?.theme.border} border-b`}>
                                <TableDataColumn value='2' />
                                <TableDataColumn value='Yordon Alvarez' />
                                <TableDataColumn value='HOU' />
                                <TableDataColumn value='.311' />
                            </tr>
                            <tr className={`${t?.theme.border} border-b`}>
                                <TableDataColumn value='2' />
                                <TableDataColumn value='Yordon Alvarez' />
                                <TableDataColumn value='HOU' />
                                <TableDataColumn value='.311' />
                            </tr>
                            <tr className={`${t?.theme.border} border-b`}>
                                <TableDataColumn value='2' />
                                <TableDataColumn value='Yordon Alvarez' />
                                <TableDataColumn value='HOU' />
                                <TableDataColumn value='.311' />
                            </tr>
                            <tr>
                                <TableDataColumn value='2' />
                                <TableDataColumn value='Yordon Alvarez' />
                                <TableDataColumn value='HOU' />
                                <TableDataColumn value='.311' />
                            </tr>   
                        </tbody>
                    </table>
                </div>
            </div>
        </CardContainer>
    );
}

export default DashboardHomePlayerLeaders;