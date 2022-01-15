export function getPunDate(date: any): string {
    // Date object or date string will be passed
    let result: string = '';
    if(typeof date !== "string") {
        result = date.toISOString();
    } else {
        result = date.toString();
    }
    return result.slice(0, 10);
}
