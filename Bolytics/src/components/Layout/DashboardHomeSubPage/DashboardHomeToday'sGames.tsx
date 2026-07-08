/* eslint-disable @typescript-eslint/no-unused-vars */
import "../../../styles/index.css"

import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";
import CardContainer from "../../UI/CardContainer";
import CardHeader from "../../UI/CardHeader";
import { getTodaysDate } from "../../../lib/utils";
import CalendarIcon from '../../../assets/calendar.svg?react';
import { getDayWithSuffix, getMonth } from "../../../lib/lookup";
import TodaysGameCard from "./TodaysGameCard/TodaysGameCard";


function DashboardHomeTodaysGames() {
    const t = useContext(ThemeContext);
    const today = getTodaysDate();
    

    return (
        <CardContainer className={``}>
            <div className={`flex flex-col gap-y-1 mb-2`}>
                <CardHeader text="Todays Games" />
                <div className={`flex gap-x-1 items-center h-[100%]`}>
                    <CalendarIcon className="size-[1.5rem]" />
                    <span className={`text-[1.1rem]`}>{`${getMonth(today.month)}, ${getDayWithSuffix(today.day)} ${today.year}`}</span>
                </div>
            </div>
            <TodaysGameCard />
        </CardContainer>
    )
}

export default DashboardHomeTodaysGames;