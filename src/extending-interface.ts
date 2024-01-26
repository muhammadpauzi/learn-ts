export interface Employee {
    id: number;
    name: string;
    division: string;
}

export interface Manager extends Employee {
    numberOfEmployees: number;
}

const employee1: Employee = {
    id: 123,
    name: "em",
    division: 'ads'
}

const manager: Manager = {
    id: 1234,
    name: 'man',
    division: 'it',
    numberOfEmployees: 123,
}