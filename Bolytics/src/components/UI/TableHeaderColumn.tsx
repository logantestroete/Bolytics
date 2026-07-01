/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react';
import '../../styles/index.css'
import { ThemeContext } from '../../context/themeContext';

type Props = {
    value: string;
}

function TableHeaderColumn({value}: Props) {
    const t = useContext(ThemeContext)

    return (
        <th className={"p-4"}>
          <p className={"block text-sm font-normal leading-none"}>
            {value}
          </p>
        </th>
    )
}

export default TableHeaderColumn;