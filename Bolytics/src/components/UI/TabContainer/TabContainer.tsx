import type { IconType } from 'react-icons';
import '../../../styles/index.css'
import Tab from './Tab';

type Props = {
    tabs: {
        name: string;
        Icon: IconType;
    }[];
}

function TabContainer({tabs}: Props) {

    return (
        <div className="fixed bottom-2 left-8 right-8 h-[48px] rounded-t-xl bg-surface dark:bg-dark-surface md:static md:h-full md:w-[48px] md:rounded-none">
            <div className="flex h-full w-full items-center justify-around px-2 md:flex-col md:justify-start md:items-center md:px-0 md:py-4">
                {tabs.map(tab => (<Tab key={tab.name} name={tab.name} Icon={tab.Icon}/>))}
            </div>
        </div>
    );
}

export default TabContainer;