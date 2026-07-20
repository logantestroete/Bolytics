import '../../../styles/index.css';
import { MdOutlineInsertChartOutlined } from 'react-icons/md';
import { IoMenu } from 'react-icons/io5';
import { useState } from 'react';
import HeaderMenu from './HeaderMenu';

function Header() {
    const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState<boolean>(false);

    return (
        <div>
            <div className="flex justify-between items-center px-2 h-[8vh] bg-bg-400 dark:bg-dark-bg-400">
                <MdOutlineInsertChartOutlined color="oklch(90% 0 0)" className='size-[3rem]' />
                <IoMenu color={`oklch(90% 0 0)`} className={`size-[1.5rem] transition-transform duration-500 ease-in-out ${isHeaderMenuOpen ? 'rotate-90':''}`} onClick={() => setIsHeaderMenuOpen(!isHeaderMenuOpen)}/>
            </div>
            <HeaderMenu className={`${isHeaderMenuOpen ? '' : 'translate-x-full'}`}/>
        </div>
    )
}

export default Header;