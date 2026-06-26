import "../../../styles/index.css"

import CardContainer from "../../UI/CardContainer";
import CardHeader from "../../UI/CardHeader";
import CardStatCategoryVertical from "../../UI/CardStatCategoryVertical";



function FavoriteTeam() {
    return (
        <CardContainer className="grid grid-cols-[1fr] w-full gap-y-4">
            
            <CardHeader text="Favorite Team" className="justify-self-start"/>

            <div className="flex gap-x-3 border-b-1 pb-3    ">
                <div className="w-[5rem] h-[5rem] rounded-full bg-bg-dark"></div>
                <div className="flex flex-col justify-center">
                    <span className="text-[1.25rem] font-bold block">Los Angles Dodgers</span>
                    <span className="text-[1rem] font-semibold">Bolytics Rank: 3</span>
                </div>
            </div>
            
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr] place-items-center w-[100%]">
                <CardStatCategoryVertical category="W-L" value={'32-41'} className="border-r-1 px-4 w-[100%]"/>
                <CardStatCategoryVertical category="PCT" value={.435} className="border-r-1 px-4 w-[100%]" />
                <CardStatCategoryVertical category="GB" value={'0.5'} className="border-r-1 px-4 w-[100%]" />
                <CardStatCategoryVertical category="STRK" value={'W10'} className="px-4 w-[100%]"/>
            </div>
            
        </CardContainer>
    )
}

export default FavoriteTeam;