import '../../styles/index.css'

type CardStatCategoryProps = {
    category: string;
    value: string | number;
    className?: string;
}

function CardStatCategoryVertical({category,value,className}: CardStatCategoryProps) {
    return (
        <div className={`grid grid-cols-[1fr] gap-y-2 4 place-items-center ${className}`}>
            <span className='font-bold'>{category}</span>
            <span className='text-text-muted'>{value}</span>
        </div>
    )
}

export default CardStatCategoryVertical;