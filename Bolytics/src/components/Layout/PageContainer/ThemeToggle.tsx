import { useContext, useState } from 'react';
import '../../../styles/index.css';
import { ThemeContext } from '../../../hooks/context/ThemeContext';
import { Theme } from '../../../utils/enums';
import { FaMoon, FaSun } from 'react-icons/fa';


function ThemeToggle() {
    const t = useContext(ThemeContext);
    const [isChecked, setIsChecked] = useState(t.theme === Theme.DARK);

    const handleThemeChange = (checked: boolean) => {
        setIsChecked(checked)
        t.setTheme(t.notSelected);
        console.log(t.theme);
    }

    return (
        <label className="relative inline-flex h-8 w-20 cursor-pointer items-center">
            <input type="checkbox" className="peer sr-only" checked={isChecked} onChange={(e) => handleThemeChange(e.target.checked)}/>

            {/* Background */}
            <div
                className="
            h-full
            w-full
            rounded-full
            bg-dark-surface-hover
            transition-colors
            duration-300
            peer-checked:bg-surface-hover
        "
            />

            {/* Thumb */}
            <div
                className="
            absolute
            left-1
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            bg-surface-hover
            transition-all
            duration-300
            peer-checked:translate-x-12
            peer-checked:bg-dark-surface-hover
        "
            >
                <FaSun className={`h-5 w-5 ${isChecked ? 'hidden':'block'}`} color='orange'/>
                <FaMoon className={`h-5 w-5 ${isChecked ? 'block':'hidden'}`} />
            </div>
        </label>
    )
}

export default ThemeToggle;