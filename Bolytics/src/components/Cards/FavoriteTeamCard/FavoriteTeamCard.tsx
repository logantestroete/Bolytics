import { TextSizes } from '../../../lib/styling';
import '../../../styles/index.css'
import Card from '../../Layout/Card/Card';
import TeamLogo from '../../../assets/MLB/National League/Milwaukee Brewers/milwaukee-brewers_big_circle.png';
import StackedStat from '../../UI/StatLayouts/StackedStat';
import { IoCalendarOutline, IoInformationCircleOutline } from 'react-icons/io5';
import { BolyticsRating } from './BolyticsTeamRatings';
import IconAndTextButton from '../../UI/Buttons/IconAndTextButton';
import { IoMdBook } from 'react-icons/io';
import RowGameScore from '../../UI/GameLayouts/RowGameScore';
import { useContext, useState } from 'react';
import { TabNavigationContext } from '../../../hooks/context/TabNavigationContext';
import { DashboardTabState } from '../../../lib/enums';

function FavoriteTeamCard() {
    const [isRatingsBlockOpen, setIsRatingsBlockOpen] = useState(false);
    const nav = useContext(TabNavigationContext);

    const lastTenGames: string[] = [
        'W',
        'L',
        'W',
        'W',
        'W',
        'L',
        'L',
        'W',
        'W',
        'W'
    ];

    return (
        <Card className=' w-full flex-col md:flex-row flex flex-wrap relative gap-y-4'>
            <div className='border-border border-b dark:border-dark-border flex flex-col gap-y-4 flex-grow-2 pb-2 favTeam:border-b-0 favTeam:border-r'>
                <div className='grid sm:grid-cols-[0.7fr_0.3fr] grid-cols-[1fr]'>
                    {/* Team General Info */}
                    <div className='border-r-none sm:border-r border-border dark:border-dark-border sm:pr-4'>
                        <div className='flex justify-between items-center w-full'>
                            <span className={`${TextSizes.sm}`}>My Favorite Team</span>
                            <IoInformationCircleOutline className={`${TextSizes.md} cursor-pointer hover sm:hidden`} onClick={() => setIsRatingsBlockOpen(!isRatingsBlockOpen)} />
                        </div>
                        <div className='flex gap-x-4'>
                            <div className='overflow-hidden'>
                                <img src={TeamLogo} alt='Favorite Team Logo' className={`size-[clamp(4rem,6rem+1vw,8rem)] object-cover object-center`} />
                            </div>
                            <div className="flex flex-col">
                                <span className={`${TextSizes.md}`}>Milwaukee Brewers</span>
                                <span className={`${TextSizes.xs} text-text-muted dark:text-dark-text-muted`}>NL Central</span>
                                <div className='flex items-center justify-between gap-x-2 mt-2'>
                                    <StackedStat value='56-28' type='Record' />
                                    <StackedStat value='1st' type='In Division' />
                                    <StackedStat value='-' type='GB' />
                                    <StackedStat value='W5' type='Streak' statColor='text-success' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Bolytics Rank */}
                    <div className={`sm:flex flex-col justify-center items-center gap-y-4 w-full hidden`}>
                        <div className='flex gap-x-2 items-center justify-center'>
                            <span className={`${TextSizes.xs}`}>Bolytics Rank</span>
                            <IoInformationCircleOutline />
                        </div>
                        <BolyticsRating rating={87} />
                    </div>
                </div>

                {/* Last 10 games and navigation buttons */}
                <div className='flex items-end justify-between flex-wrap gap-x-8 gap-y-4 px-2'>
                    {/* 10 games displayed */}
                    <div className='flex flex-col gap-y-2 text-text-muted dark:text-dark-text-muted grow-2'>
                        <span className={`${TextSizes.xs}`}>Last 10 Games</span>
                        <div className='pl-4 flex gap-2'>
                            {lastTenGames.map(outcome => {
                                return (
                                    <div className={`flex justify-center items-center p-1 border rounded-full size-[1.25rem]
                             ${outcome === 'W' ? 'border-success text-success' : 'border-error text-error'}`}>
                                        <span className={`${TextSizes.xs}`}>{outcome}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className='border rounded-md border-border dark:border-dark-border sm:max-w-[190px] grow-2' onClick={() => nav?.setCurTab(DashboardTabState.TEAMS)}>
                        <IconAndTextButton text='View Team' Icon={IoMdBook} className='hover:bg-surface-hover dark:hover:bg-dark-surface-hover rounded-md w-full' />
                    </div>
                </div>
            </div>

            {/* Next Game Card */}
            <div className='flex flex-col gap-y-[19px] px-3 min-w-[249px] flex-grow-2 '>
                <div className='flex flex-col '>
                    <span className={`${TextSizes.sm} font-semibold mb-2`}>Next Game</span>
                    <span className={`${TextSizes.xs} text-text-muted dark:text-dark-text-muted`}>Jul 6 • Toronto, ON</span>
                </div>

                <RowGameScore gamePk={2222222} className='max-w-[400px] w-full self-center'/>

                <span className={`${TextSizes.xs} text-text-muted dark:text-dark-text-muted`}>American Family Field • Milwaukee, WI</span>

                <button className='border rounded-md border-border dark:border-dark-border' onClick={() => nav?.setCurTab(DashboardTabState.TEAMS)}>
                    <IconAndTextButton text='View Schedule' Icon={IoCalendarOutline} className='hover:bg-surface-hover dark:hover:bg-dark-surface-hover rounded-md w-full' />
                </button>
            </div>

            <div className={`${isRatingsBlockOpen ? 'absolute' : 'hidden'} ${TextSizes.xs} sm:hidden top-10 right-2 z-2 rounded-md bg-surface-raised dark:bg-dark-surface-raised`}>
                <div className='flex flex-col justify-center items-start p-2'>
                    <span>{`Rating: ${87}`}</span>
                    <span>{`Ranking: ${10}th`}</span>
                </div>
            </div>
        </Card>
    )
}

export default FavoriteTeamCard;