import { createContext, useState } from 'react'

type Props = {
    startingTab: string;
    children: React.ReactNode
}

type TabNavigationContext = {
    curTab: string;
    setCurTab: (t: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TabNavigationContext = createContext<TabNavigationContext | null>(null);

export default function TabNavigationProvider({startingTab,children}: Props) {
    const [curTab, setCurTab] = useState<string>(startingTab);

    return <TabNavigationContext value={{curTab,setCurTab}}>
        {children}
    </TabNavigationContext>
}