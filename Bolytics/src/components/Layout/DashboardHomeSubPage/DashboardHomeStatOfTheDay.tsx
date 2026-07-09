import { useContext } from 'react';
import '../../../styles/index.css';
import CardContainer from '../../UI/CardContainer';
import CardHeader from '../../UI/CardHeader';
import { ThemeContext } from '../../../context/themeContext';
import RankedIconStatRow from '../../UI/RankedIconStatRow';





function DashboardHomeStatOfTheDay() {
    const t = useContext(ThemeContext)

    return (
        <CardContainer>
            <CardHeader text='Stat Of The Day' />
            <span className={`${t?.theme.textPrimary} text-lg font-semibold`}>Home Runs</span>
            <div className={`flex flex-col gap-y-2 mt-3`}>
                <RankedIconStatRow rank={1} name='K. Schwarber' statValue={31} className='border-b pb-2'/>
                <RankedIconStatRow rank={2} name='K. Schwarber' statValue={31} className='border-b pb-2'/>
                <RankedIconStatRow rank={3} name='K. Schwarber' statValue={31} className='border-b pb-2'/>
                <RankedIconStatRow rank={4} name='K. Schwarber' statValue={31} className='border-b pb-2'/>
                <RankedIconStatRow rank={5} name='K. Schwarber' statValue={31} />
            </div>
        </CardContainer>
    )
}

export default DashboardHomeStatOfTheDay;