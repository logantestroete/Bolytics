import { useContext } from "react";
import "../../../styles/index.css";
import Header from "./Header";
import { ThemeContext } from "../../../hooks/context/ThemeContext";

type Props = {
    children: React.ReactNode;
}

function PageContainer({children}: Props) {
    const t = useContext(ThemeContext);

    return (
        <div className={`${t.theme} w-[100vw] h-[100vh] bg-background text-text dark:bg-dark-background dark:text-dark-text overflow-x-hidden`}>
            <Header />
            <div className="text-text dark:text-dark-text h-[100%]">
                {children}
            </div>
        </div>
    )
}

export default PageContainer;