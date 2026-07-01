import { ThemeContext } from "../../context/themeContext"
import "../../styles/index.css"

import { useContext } from "react"

type TableDataColumn = {
    value: string;
    hasBorder?: boolean;
}


function TableDataColumn({value, hasBorder}: TableDataColumn) {
    const t = useContext(ThemeContext);

    return (
        <td className={`p-4 ${t?.theme.border} ${hasBorder ? 'border-r' : ''}`}>
            <p className={`block text-sm ${t?.theme.text}`}>
                {value}
            </p>
        </td>
    )
}

export default TableDataColumn;