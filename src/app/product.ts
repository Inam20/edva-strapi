export interface Product {
    id: number;
    title: string;
    slug: string;
    price: number;
    availability: boolean;
    sku: string;
    category: string;
    tag: string;
    shortDesc: string;
    description: string;
    quantity: number;
    image: {
        url: string;
    };
}