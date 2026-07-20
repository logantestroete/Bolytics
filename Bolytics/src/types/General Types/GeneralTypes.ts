
export interface HeaderTab {
    title: string;
    Icon: React.ReactNode;
    subtabs?: {
        title: string;
        Icon: React.ReactElement;
    }[];
}