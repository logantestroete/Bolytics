import { TextSizes } from "../../../lib/styling";
import "../../../styles/index.css"

type Props = {
    value: string;
    type: string;
    className?: string;
    statColor?: string;
}

function StackedStat({value,type,className,statColor}: Props) {
    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>
            <span className={`font-semibold ${TextSizes.sm} ${statColor}`}>{value}</span>
            <span className={`${TextSizes.xs} text-text-muted dark:text-dark-text-muted`}>{type}</span>
        </div>
    )
}

export default StackedStat;