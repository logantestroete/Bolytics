import '../../../styles/index.css'

import { useContext } from 'react'
import CardHeader from '../../UI/CardHeader';
import { ThemeContext } from '../../../context/themeContext';
import CardContainer from '../../UI/CardContainer';

function DashboardHomeStandings() {
    const t = useContext(ThemeContext)
    return (
        <CardContainer className={``}>
            <CardHeader text='AL West Standings' />

        </CardContainer>
    )
}

export default DashboardHomeStandings;