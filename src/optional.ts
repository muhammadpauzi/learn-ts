function sayHello(name?: string | null) {
    console.log(`Hello ${name ?? '-'}`)
}

const nm: string | undefined = undefined;
sayHello(nm);
sayHello(null);