import type { IconType } from 'react-icons';
import '../../../styles/index.css'
import { useContext } from 'react';
import { TabNavigationContext } from '../../../hooks/context/TabNavigationContext';

type Props = {
    name: string;
    Icon: IconType;
}

function Tab({name,Icon}: Props) {
    const nav = useContext(TabNavigationContext);

    return <button onClick={() => {console.log(name); nav?.setCurTab(name)}} className={`cursor-pointer hover:bg-surface-hover dark:hover:bg-dark-surface-hover
    w-full h-full max-h-[48px] md:w-full md:h-[48px] flex justify-center items-center ${nav?.curTab === name ? 'border-t-2 bg-surface-hover dark:bg-dark-surface-hover md:border-t-0 md:border-r-2':''} border-primary`}>
        <Icon className='size-[1.25rem]'/>
    </button>
}

export default Tab;