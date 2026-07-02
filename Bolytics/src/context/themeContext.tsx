import { createContext, useState } from "react";

type ThemeColorObjectType = {
    bgDark: string;
    bg: string;
    bgLight: string;
    bgPrimary: string;
    text: string;
    textMuted: string;
    border: string;
    primaryBorder: string;
    accentBorder: string;
    successBorder: string;
    errorBorder: string;
    warningBorder: string;
    infoBorder: string;
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
    bgPrimary: "bg-dark-primary",
    text: 'text-dark-text',
    textMuted: 'text-dark-text-muted',
    border: 'border-dark-border',
    primaryBorder: "border-dark-primary",
    accentBorder: "border-dark-accent",
    successBorder: "border-dark-success",
    errorBorder: "border-dark-error",
    warningBorder: "border-dark-warning",
    infoBorder: "border-dark-info",
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
    bgPrimary: 'bg-light-primary',
    text: 'text-light-text',
    textMuted: 'text-light-text-muted',
    border: 'border-light-border',
    primaryBorder: "border-light-primary",
    accentBorder: "border-ligh-accent",
    successBorder: "border-light-success",
    errorBorder: "border-light-error",
    warningBorder: "border-light-warning",
    infoBorder: "border-light-info",
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