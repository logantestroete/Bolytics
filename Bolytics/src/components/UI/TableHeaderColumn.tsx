/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react';
import '../../styles/index.css'
import { ThemeContext } from '../../context/themeContext';

type Props = {
    value: string;
    className?: string;
}

function TableHeaderColumn({value, className}: Props) {
    const t = useContext(ThemeContext)

    return (
        <th className={`p-4 ${className}`}>
          <p className={"block text-sm font-normal text-start leading-none"}>
            {value}
          </p>
        </th>
    )
}

export default TableHeaderColumn;