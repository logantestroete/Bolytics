import type React from 'react';
import '../../../styles/index.css'

type Props = {
    className?: string;
    children: React.ReactNode;
}

function Card({children, className}: Props) {
    return (
        <div className={`p-2 bg-surface dark:bg-dark-surface border-border dark:border-dark-border rounded-md ${className ?? ""}`}>
            {children}
        </div>
    )
}

export default Card;