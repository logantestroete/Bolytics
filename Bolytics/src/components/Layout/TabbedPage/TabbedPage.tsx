import type { IconType } from "react-icons";
import TabNavigationProvider from "../../../hooks/context/TabNavigationContext"
import "../../../styles/index.css"
import TabContainer from "../../UI/TabContainer/TabContainer";
import PageContainer from "../PageContainer/PageContainer"

type Props = {
    startingTab: string;
    tabs: {
        name: string;
        Icon: IconType;
    }[]
    children: React.ReactNode;
}

function TabbedPage({ children, startingTab, tabs }: Props) {
    return (
        <TabNavigationProvider startingTab={startingTab}>
            <PageContainer>
                <div className={`relative h-[100vh] flex`}>
                    <TabContainer tabs={tabs} />
                    {children}
                </div>
            </PageContainer>
        </TabNavigationProvider>
    )
}

export default TabbedPage;