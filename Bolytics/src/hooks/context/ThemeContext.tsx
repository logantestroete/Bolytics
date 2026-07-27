/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { Theme } from "../../utils/enums";

type ThemeType = {
    theme: string;
    setTheme: (t: string) => void;
    notSelected: string;
}

export const ThemeContext = createContext<ThemeType>({ theme: Theme.LIGHT, setTheme: (t: string) => {console.log(t)}, notSelected: Theme.DARK});


export function ThemeContextProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState<string>(Theme.DARK);
    const [notSelected, setNotSelected] = useState(Theme.LIGHT);

    const toggleTheme = (t: string) => {
        if (t === Theme.DARK) {
            setTheme(Theme.DARK);
            setNotSelected(Theme.LIGHT);
            return;
        }

        setTheme(Theme.LIGHT);
        setNotSelected(Theme.DARK);
    }

    return (
        <ThemeContext value={{theme, setTheme: toggleTheme, notSelected}} >
            {children}
        </ThemeContext>
    )
}