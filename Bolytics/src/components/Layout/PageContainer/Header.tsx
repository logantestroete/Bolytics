import '../../../styles/index.css';
import { MdOutlineInsertChartOutlined } from 'react-icons/md';
import { IoMenu } from 'react-icons/io5';
import { useContext, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import { ThemeContext } from '../../../hooks/context/ThemeContext';
import { Theme } from '../../../utils/enums';
import { IconColors } from '../../../styles/styleLookups';

function Header() {
    const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState<boolean>(false);
    const t = useContext(ThemeContext);
    return (
        <div className='relative'>
            <div className="flex justify-between items-center px-2 h-[8vh] bg-surface dark:bg-dark-surface">
                <MdOutlineInsertChartOutlined color={`${t.theme === Theme.DARK ? IconColors.dark : IconColors.light}`} className='size-[3rem]' />
                <IoMenu color={`oklch(90% 0 0)`} className={`size-[1.5rem] cursor-pointer transition-transform duration-500 ease-in-out ${isHeaderMenuOpen ? 'rotate-90':''}`} onClick={() => setIsHeaderMenuOpen(!isHeaderMenuOpen)}/>
            </div>
            <HeaderMenu className={`${isHeaderMenuOpen ? '' : 'translate-x-full'} absolute`}/>
        </div>
    )
}

export default Header;