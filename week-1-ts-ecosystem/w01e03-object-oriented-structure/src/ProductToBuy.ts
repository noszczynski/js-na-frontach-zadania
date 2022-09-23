import Product, {ProductType} from "./Product";

class ProductToBuy extends Product {
    #type: ProductType.Buy;
    #price: number;

    constructor(name: string, price: number, count: number) {
        super(name, ProductType.Buy, count);

        this.#price = price;
    }

    get price (): number {
        return this.#price
    }
}

export default ProductToBuy;