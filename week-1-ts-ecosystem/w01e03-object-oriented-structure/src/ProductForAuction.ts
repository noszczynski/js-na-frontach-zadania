import Product, {ProductType} from "./Product";

class ProductForAuction extends Product {
    #type: ProductType.Auction;
    #price: number;

    constructor(name: string, price: number, count: number) {
        super(name, ProductType.Auction, count);

        this.#price = price;
    }

    get price (): number {
        return this.#price
    }
}

export default ProductForAuction;