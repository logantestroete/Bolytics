import { createContext, useState } from "react";

type ThemeContextType = {
    theme: "dark" | "light";
    setTheme: (t: "dark" | "light") => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeContextProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState<"dark" | "light">('dark');

    return (
        <ThemeContext value={{theme, setTheme}}>
            {children}
        </ThemeContext>
    )
}

export default ThemeContextProvider;