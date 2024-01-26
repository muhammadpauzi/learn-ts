export type Category = {
    id: string;
    name: string;
}

export type Product = {
    id: string;
    name: string;
    price: number;
    category: Category;
}

const category: Category = {
    id: "123",
    name: "Category 1"
}

const product: Product = {
    id: "123",
    name: "product 1",
    price: 120,
    category,
}