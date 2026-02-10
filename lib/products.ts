export interface Product {
    id: string,
    name: string,
    description: string,
}

export const products: Product[] = [
    {id: "1", name: "Bag1", description: "Durable primitive bag made by Chrome the king of resources"},
    {id: "2", name: "Bag2", description: "Stylish and useful bag made by Senku the king of Science"},
]