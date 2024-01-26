export interface Seller {
    readonly id: number;
    name: string;
    address?: string | null;
}

const seller: Seller = {
    id: 123,
    name: "sl",
}

// seller.id = 1234; // error