import '../../../../styles/index.css';
import CardContainer from '../../../UI/CardContainer';
import CardHeader from '../../../UI/CardHeader';
import TrendingTeamsRow from './TrendingTeamRow';
import HotIcon from '../../../../assets/hot.svg?react';
import ColdIcon from '../../../../assets/cold.svg?react';

function DashboardHomeTrendingTeams() {


    return (
        <CardContainer className='grid grid-cols-[1fr] gap-y-2'>
            <CardHeader text='Trending Teams'/>
            <div className={`grid grid-cols-[0.5fr_0.5fr] gap-x-1`}>
                <div className={`grid grid-cols-[1fr] bg-hot-bg border-hot border rounded-md p-2`}>
                    <div className='flex gap-x-2 items-center'>
                        <HotIcon />
                        <span className='text-hot-text font-semibold text-lg'>HOTTEST</span>
                    </div>
                    <TrendingTeamsRow team='SF Giants' record='8-2' 
                        pct='.800' isHot={true} hasBorder={true} />
                    <TrendingTeamsRow team='CLE Guardians' record='7-3' 
                        pct='.700' isHot={true} hasBorder={true} />
                    <TrendingTeamsRow team='LA Dodgers' record='6-4' 
                        pct='.600' isHot={true} hasBorder={false} />
                </div>
                <div className={`grid grid-cols-[1fr] bg-cold-bg border-cold border rounded-md p-2`}>
                    <div className='flex gap-x-2 items-center'>
                        <ColdIcon fill='oklch(0.72 0.25 255)' />
                        <span className='text-cold-text font-semibold text-lg'>COLDEST</span>
                    </div>
                    <TrendingTeamsRow team='LA Angels' record='4-6' 
                        pct='.400' isHot={false} hasBorder={true} />
                    <TrendingTeamsRow team='PHI Phillies' record='2-8' 
                        pct='.200' isHot={false} hasBorder={true} />
                    <TrendingTeamsRow team='CIN Reds' record='1-9' 
                        pct='.100' isHot={false} hasBorder={false} />
                </div>
            </div>
        </CardContainer>
    )
}

export default DashboardHomeTrendingTeams;