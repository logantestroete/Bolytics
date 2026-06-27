import { createContext, useState } from "react";

type ThemeColorObjectType = {
    bgDark: string;
    bg: string;
    bgLight: string;
    text: string;
    textMuted: string;
    border: string;
    primary: string;
    accent: string;
    success: string;
    error: string;
    warning: string;
    info: string;
    better: string;
    worse: string;
    equal: string;
}

type ThemeContextType = {
    isDark: boolean;
    setDarkTheme: () => void;
    theme: ThemeColorObjectType;
}

const darkTheme: ThemeColorObjectType = {
    bgDark: 'bg-dark-bg-dark',
    bg: 'bg-dark-bg',
    bgLight: 'bg-dark-bg-light',
    text: 'text-dark-text',
    textMuted: 'text-dark-text-muted',
    border: 'border-dark-border',
    primary: 'dark-primary',
    accent: 'dark-accent',
    success: 'dark-success',
    error: 'dark-error',
    warning: 'dark-warning',
    info: 'dark-info',
    better: 'dark-better',
    worse: 'dark-worse',
    equal: 'dark-equal'
}

const lightTheme: ThemeColorObjectType = {
    bgDark: 'bg-light-bg-dark',
    bg: 'bg-light-bg',
    bgLight: 'bg-light-bg-light',
    text: 'text-light-text',
    textMuted: 'text-light-text-muted',
    border: 'border-light-border',
    primary: 'light-primary',
    accent: 'light-accent',
    success: 'light-success',
    error: 'light-error',
    warning: 'light-warning',
    info: 'light-info',
    better: 'light-better',
    worse: 'light-worse',
    equal: 'light-equal'
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeContextProvider({children}: {children: React.ReactNode}) {
    const [isDark, setIsDark] = useState<boolean>(true);
    const [theme, setTheme] = useState<ThemeColorObjectType>(darkTheme)

    const setDarkTheme = () => {
        setIsDark(!isDark);
        setTheme((isDark) ? darkTheme : lightTheme)
    }

    return (
        <ThemeContext value={{isDark, setDarkTheme, theme}}>
            {children}
        </ThemeContext>
    )
}

export default ThemeContextProvider;