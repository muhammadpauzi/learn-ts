function sayHello(name: string, filter: (name: string) => string) {
    return `Hello ${filter(name)}`;
}

sayHello(
    "me",
    (name: string): string =>
        name.toUpperCase()
);