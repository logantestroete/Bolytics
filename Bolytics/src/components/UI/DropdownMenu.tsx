import { useContext, useState } from 'react';
import '../../styles/index.css'
import { ThemeContext } from '../../context/themeContext';
import DropdownArrow from '../../assets/dropdown_arrow.svg?react';

type Props = {
    values: string[];
    setValue: (t: string) => void;
}

function DropdownMenu({ values, setValue }: Props) {
    const [curValue, setCurValue] = useState<string>((values !== undefined && values.length > 0) ? values[0] : "N/A");
    const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
    const t = useContext(ThemeContext);
    const setValues = (value: string) => {
        setCurValue(value);
        setValue(value);
        setIsDropDownOpen(false);
    }

    

    return (
        <div className='relative'>
            <button onClick={() => setIsDropDownOpen(!isDropDownOpen)} 
            className={`${t?.theme.border} w-20 p-2 inline-flex justify-between items-center border rounded-md`}>
                {curValue}
                <DropdownArrow />
            </button>

            <div className={`${isDropDownOpen?'absolute':'hidden'} z-10 top-11`}>
                {values.map(value => {
                    if (value === curValue) return <div key={value} className='hidden'></div>
                    return <button key={value} onClick={() => setValues(value)}
                    className={`inline-flex justify-start text-sm w-20 p-3 ${t?.theme.bgLight}`}>
                        {value}
                    </button>
                })}
            </div>
        </div>
    )
}

export default DropdownMenu;