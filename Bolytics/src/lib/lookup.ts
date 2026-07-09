import { GameStatus } from "./enums";

// general lookup functions

export function getMonth(n: number): string {
    switch (n) {
        case 1: return "January";
        case 2: return "Feburary";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
        default: return "";
    }
}

export function getDayWithSuffix(n: number): string {
    const lastDigit = n % 10;

    switch (lastDigit) {
        case 1: return `${n}st`;
        case 2: return `${n}nd`;
        case 3: return `${n}rd`;
        default: return `${n}th`;
    }
}

export function parseGameStatus(status: string): string {
    switch (status) {
        case "Scheduled":
        case "Pre-Game":
        case "Warmup":
            return GameStatus.PREGAME;
        case "In Progress":
        case "Manager Challenge":
        case "Review":
            return GameStatus.LIVE;
        case "Delayed":
        case "Rain Delay":
        case "Weather Delay":
            return GameStatus.DELAYED;
        case "Final":
        case "Game Over":
        case "Completed Early":
            return GameStatus.FINAL;
        case "Postponed":
            return GameStatus.POSTONED;
        case "Suspended":
            return GameStatus.SUSPENDED;
        case "Cancelled":
            return GameStatus.CANCELLED;
        default:
            return GameStatus.PREGAME;
    }
}