import "../../../styles/index.css";
import Header from "./Header";

type Props = {
    children: React.ReactNode;
}

function PageContainer({children}: Props) {

    return (
        <div className={`dark w-[100vw] h-[100vh] bg-bg-500 dark:bg-dark-bg-500 text-txt dark:text-dark-txt`}>
            <Header />
            {children}
        </div>
    )
}

export default PageContainer;