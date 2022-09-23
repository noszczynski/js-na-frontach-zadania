import { v4 as uuid } from "uuid"

export enum ProductType {
    Auction = "auction",
    Buy = "buy",
    Free = "free",
}

export type ProductId = ReturnType<typeof uuid>

class Product {
    readonly #type: ProductType;
    readonly #id: ProductId;
    readonly #name: string;
    readonly #count: number;

    constructor(name: string, type: ProductType, count = 0) {
        this.#id = uuid();

        this.#type = type;
        this.#name = name;
        this.#count = count;
    }

    get id () {
        return this.#id
    }

    get type () {
        return this.#type
    }

    get name () {
        return this.#name
    }

    get count () {
        return this.#count
    }
}

export default Product;