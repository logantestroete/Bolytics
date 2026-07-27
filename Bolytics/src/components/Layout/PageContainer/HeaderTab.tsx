import { Link } from 'react-router';
import '../../../styles/index.css';
import type { IconType } from 'react-icons';

type Props = {
    title: string;
    Icon: IconType;
    path: string;
}

function HeaderTab({ title, Icon, path }: Props) {

    return (
        <Link to={path} className='flex gap-x-2 w-full items-center h-[50px] p-4 hover:bg-surface-hover dark:hover:bg-dark-surface-hover'>
            <Icon className='size-[1.5rem]'/>
            <span className='font-semibold text-xl'>{title}</span>
        </Link>
    )
}

export default HeaderTab;