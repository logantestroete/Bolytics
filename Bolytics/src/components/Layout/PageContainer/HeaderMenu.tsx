import '../../../styles/index.css';
// Icon imports
import { RxDashboard } from 'react-icons/rx';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { BiChart } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

import HeaderTab from './HeaderTab';
import ThemeToggle from './ThemeToggle';
import { PiSignOut } from 'react-icons/pi';

type Props = {
    className: string;
}

function HeaderMenu({className}: Props) {
    return (
        <div className={`bg-surface dark:bg-dark-surface max-w-[400px] w-[100vw] z-10 h-[100vh] 
        transition-transform duration-400 ease-in-out justify-self-end ${className} p-4 flex flex-col gap-y-4`}>
            <div className='border-b border-border dark:border-dark-border pb-2'>
                <HeaderTab title="Dashboard" Icon={RxDashboard} path="/" />
                <HeaderTab title="Bolytics+" Icon={BiChart} path="/bolytics-plus" />
                <HeaderTab title="About" Icon={IoIosInformationCircleOutline} path="/about" />
            </div>
            <div className='border-b border-border dark:border-dark-border pb-2'>
                <HeaderTab title="Profile" Icon={CgProfile} path="/user-profile" />
                <button className='flex gap-x-2 w-full items-center h-[50px] p-4 hover:bg-surface-hover dark:hover:bg-dark-surface-hover hover:cursor-pointer'>
                    <PiSignOut className='size-[1.5rem] text-error'/>
                    <span className='font-semibold text-xl text-error'>Sign Out</span>
                </button>
            </div>

            <div className='w-full flex justify-start items-center pl-4'>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default HeaderMenu;