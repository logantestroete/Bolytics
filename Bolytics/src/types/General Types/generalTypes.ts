export interface Result<T> {
    result: {
        success: true;
        value: T;
    } | {
        success: false;
        err: string;
    }
}