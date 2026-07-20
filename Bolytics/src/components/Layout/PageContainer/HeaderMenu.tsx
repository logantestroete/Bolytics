import '../../../styles/index.css';
import type { HeaderTab } from '../../../types/General Types/GeneralTypes';
// Icon imports
import { RxDashboard } from 'react-icons/rx';
import { AiOutlineHome } from 'react-icons/ai';
import { IoMdPeople, IoMdPerson } from 'react-icons/io';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { BsPlayBtn } from 'react-icons/bs';

type Props = {
    className: string;
}

function HeaderMenu({className}: Props) {
    return (
        <div className={`bg-bg-400 dark:bg-dark-bg-400 w-[50vw] max-w-[200px] h-[100vh] z-10 
        transition-transform duration-400 ease-in-out justify-self-end ${className}`}>
            <div>
                
            </div>
        </div>
    )
}

export default HeaderMenu;