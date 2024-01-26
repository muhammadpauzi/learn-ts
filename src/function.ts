function sayHi(): void {
    console.log("Hiii:\"")
}

function sum(
    v1: number,
    v2: number,
    v3: number = 0
): number {
    return v1 + v2 + v3;
}

function sum2(...values: number[]): number {
    return values.reduce((v1, v2) => v1 + v2);
}

sum2(1, 2, 3, 4, 5, 6);

