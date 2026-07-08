// Common helper functions that can be used throughout the application

export function getTodaysDate() {
    const today: Date = new Date();

    const day: number = today.getDay();
    const month: number = today.getMonth();
    const year: number = today.getFullYear();

    return {
        date: today,
        day: day,
        month: month,
        year: year
    }
}