function callMe(value: number): number;
function callMe(value: string): string;
function callMe(value: any) {
    return value;
}

callMe(1); // return number
callMe("1"); // return string
callMe(12.2); // return float