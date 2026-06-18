import "../../styles/index.css"

import type { ButtonProps } from "../../types/propTypes"

function PrimaryButton({text,onClick,className}: ButtonProps): React.ReactElement {
    return (
        <button className={`bg-primary-500 rounded hover:cursor-pointer ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default PrimaryButton;