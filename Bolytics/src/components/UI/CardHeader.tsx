import '../../styles/index.css'

type CardHeaderProps = {
    text: string;
    className?: string;
}

function CardHeader({text, className}: CardHeaderProps) {
    return <div className={`text-[clamp(1.25rem,1.5rem+1vw,2rem)] font-semibold text-text ${className}`}>{text}</div>
}

export default CardHeader;