/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react';
import '../../../../styles/index.css'
import { ThemeContext } from '../../../../context/themeContext';
import Pill from '../../../UI/Pill';

type Props = {
    gamePk: number;
}

function PreGameCard({gamePk}: Props) {
    const t = useContext(ThemeContext)
    
    return (
        <div className={`grid grid-cols-[0.3fr_0.7fr] ${t?.theme.border} border rounded-md h-[75px] w-full`}>
            <div className={`flex flex-col gap-y-1 justify-center items-center text-xs ${t?.theme.border} border-r`}>
                <span>1:10 PM CST</span>
                <Pill className={`${t?.theme.bgLight}`} text='PREGAME'/>
            </div>
            <div className='flex justify-around items-center'>
                <div className='flex justify-start items-center gap-x-2'>
                    <div className={`${t?.theme.bgLight} size-[2rem] rounded-full`}></div>
                    <div className='flex flex-col justify-center items-start text-xs'>
                        <span className='font-semibold'>NYY</span>
                        <span>45-40</span>
                    </div>
                </div>
                <div>@</div>
                <div className='flex gap-x-2 items-center'>
                    <div className='flex flex-col justify-center items-end text-xs'>
                        <span className='font-semibold'>HOU</span>
                        <span>40-45</span>
                    </div>
                    <div className={`${t?.theme.bgLight} size-[2rem] rounded-full`}></div>
                </div>
            </div>
        </div>
    )
}

export default PreGameCard;