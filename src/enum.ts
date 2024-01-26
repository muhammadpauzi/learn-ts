// tidak konsisten, berbahaya, karena nilai nya berdasarkan urutan
// export enum CustomerType {
//     REGULAR, GOLD, PLATINUM
// }

// disarankan, karena urutan akan tetap, tidak berdasarkan urutan
export enum CustomerType {
    REGULAR = "regular",
    GOLD = "gold",
    PLATINUM = "platinum"
}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}

const customer1: Customer = {
    id: 12,
    name: "cs",
    type: CustomerType.GOLD
}