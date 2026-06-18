import "../../../styles/index.css";

type SideNavBarTabProp = {
    title: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    isCollapsed: boolean;
    onClick: () => void;
}

function SideNavBarTab({title, Icon, isCollapsed, onClick}: SideNavBarTabProp) {
    return (
        <li className={`flex gap-4 items-center hover:bg-bg-light hover:cursor-pointer rounded py-[5px] 
            ${isCollapsed ? 'px-[3px]' : 'px-[10px]'}`} onClick={onClick}>

            <Icon className={`${isCollapsed ? 'size-[1.75rem]' : 'size-[1.25rem]'} justify-self-start border-1 rounded p-1`}/>
            <span className={`font-semibold justify-self-end ${isCollapsed ? "hidden" : ""}`}>{title}</span>
        </li>
    )
}

export default SideNavBarTab;