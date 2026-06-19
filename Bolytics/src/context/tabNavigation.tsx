import { useState, createContext } from "react";

type TabContextType = {
    cur: number;
    setCur: (t: number) => void;
}

// Null will be the context value if useContext is called outside of the provider
// eslint-disable-next-line react-refresh/only-export-components
export const TabContext = createContext<TabContextType | null>(null);

function TabNavigationContextProvider({children}: {children: React.ReactElement}) {
    const [cur, setCur] = useState(0);

    return (
        <TabContext value={{cur, setCur}}>
            {children}
        </TabContext>
    )
}

export default TabNavigationContextProvider;