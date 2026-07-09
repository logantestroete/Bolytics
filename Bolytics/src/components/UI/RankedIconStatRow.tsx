import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import '../../styles/index.css'


type Props = {
    rank: number;
    name: string;
    statValue: string | number;
    className?: string;
}

function RankedIconStatRow({rank,name,statValue,className}: Props) {
    const t = useContext(ThemeContext);

    return (
        <div className={`grid grid-cols-[0.1fr_0.2fr_auto_0.3fr] gap-x-2 place-items-center w-full ${t?.theme.border} ${className}`}>
            <span className='text-lg font-bold'>{rank}</span>
            <div className={`${t?.theme.bgLight} size-[2.5rem] rounded-full`}></div>
            <span className='text-start w-full'>{name}</span>
            <span className='text-xl font-semibold'>{statValue}</span>
        </div>
    )
}

export default RankedIconStatRow;