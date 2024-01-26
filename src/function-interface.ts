interface addFunction {
    (v1: number, v2: number): number;
}

const add: addFunction = (v1: number, v2: number) => v1 + v2;

console.log(add(1, 2));