import type { IconType } from 'react-icons';
import '../../../styles/index.css'

type Props = {
    text: string;
    Icon: IconType;
    className?: string;
}

function IconAndTextButton({text,Icon,className}: Props) {
    return (
        <button className={`${className} flex justify-center items-center gap-x-2 cursor-pointer p-2`}>
            <Icon className='size-fit'/>
            <span className=''>{text}</span>
        </button>
    )
}

export default IconAndTextButton;