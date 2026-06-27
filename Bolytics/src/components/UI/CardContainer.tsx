import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import "../../styles/index.css"

type CardContainerProps = {
    className?: string;
    padding?: string;
    children: React.ReactNode;
}


function CardContainer({className,padding,children}: CardContainerProps) {
    const t = useContext(ThemeContext)

    return (
        <div className={`${padding ? padding : 'p-[clamp(0.5rem,0.75rem+1vw,1.5rem)]'} rounded-xl ${t?.theme.bg} backdrop-blur-sm ${className}
            shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}>
            {children}
        </div>
    )
}

export default CardContainer;