import "../../styles/index.css"

type CardContainerProps = {
    className?: string;
    padding?: string;
    children: React.ReactNode;
}


function CardContainer({className,padding,children}: CardContainerProps) {
    return (
        <div className={`${padding ? padding : 'p-[clamp(0.5rem,0.75rem+1vw,1.5rem)]'} rounded-xl bg-zinc-800/90 backdrop-blur-sm border border-white/5 text-text ${className}
            shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}>
            {children}
        </div>
    )
}

export default CardContainer;