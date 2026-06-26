import '../../styles/index.css'

type CardHeaderProps = {
    text: string;
    className?: string;
}

function CardHeader({text, className}: CardHeaderProps) {
    return <span className={`text-[clamp(1.25rem,1.5rem+1vw,2rem)] font-semibold text-text ${className}`}>{text}</span>
}

export default CardHeader;