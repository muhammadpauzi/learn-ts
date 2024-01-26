interface Person {
    id: number;
    name: string;
    sayHello(): string;
}

const person1: Person = {
    id: 123,
    name: 'me',
    sayHello: function () {
        return this.name;
    },
}