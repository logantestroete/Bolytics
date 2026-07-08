import '../../styles/index.css'

type Props = {
    text: string;
    className?: string;
}

function Pill({className,text}: Props) {
    return <span className={`${className} py-1 px-3 rounded-md font-semibold`}>{text}</span>
}

export default Pill;