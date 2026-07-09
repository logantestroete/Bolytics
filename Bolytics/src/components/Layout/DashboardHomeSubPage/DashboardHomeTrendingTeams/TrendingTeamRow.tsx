import { useContext } from 'react';
import '../../../../styles/index.css'
import { ThemeContext } from '../../../../context/themeContext';

type Props = {
    team: string;
    record: string;
    pct: string;
    hasBorder: boolean;
    isHot: boolean;
}

function TrendingTeamsRow({team,record,pct,hasBorder,isHot}: Props) {
    const t = useContext(ThemeContext);

    return (
        <div className={`${hasBorder ? 'border-b': ''} ${t?.theme.border} grid grid-cols-[0.3fr_auto] h-[100px] py-2 place-start-center items-center w-[100%]`}>
            <div className={`size-[3rem] rounded-full ${t?.theme.bgLight}`}></div>
            <div className='flex flex-col gap-y-1 w-full justify-center items-center'>
                <span className='text-center flex-1 max-w-[100px]'>{team}</span>
                <div className='flex justify-around items-center gap-x-4 max-w-[200px]'>
                    <span>{record}</span>
                    <span className={`${isHot ? 'text-hot-text':'text-cold-text'}`}>{pct}</span>
                </div>
            </div>
        </div>
    )
}

export default TrendingTeamsRow;