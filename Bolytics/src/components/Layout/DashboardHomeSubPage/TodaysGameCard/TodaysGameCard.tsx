/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react';
import { ThemeContext } from '../../../../context/themeContext';
import '../../../../styles/index.css'
import { parseGameStatus } from '../../../../lib/lookup';
import { GameStatus } from '../../../../lib/enums';
import PreGameCard from './PreGameCard';
import LiveGameCard from './LiveGameCard';
import FinalGameCard from './FinalGameCard';

function getGameCardType(status: string): React.ReactNode {
    switch (parseGameStatus(status)) {
        case GameStatus.PREGAME:
            return <PreGameCard gamePk={1} />
        case GameStatus.LIVE:
            return <LiveGameCard gamePk={1} />
        case GameStatus.FINAL:
            return <FinalGameCard gamePk={1} />
    }
}

function TodaysGameCard() {
    const t = useContext(ThemeContext)

    return (
        <div className='flex flex-col gap-y-1 justify-center items-center w-[100%]'>
            <LiveGameCard gamePk={1}/>
            <LiveGameCard gamePk={1}/>
            <PreGameCard gamePk={1}/>
            <PreGameCard gamePk={1}/>
            <FinalGameCard gamePk={1}/>
        </div>
    )
}

export default TodaysGameCard;