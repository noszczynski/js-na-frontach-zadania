export enum ProductType {
    Auction = "auction",
    Buy = "buy",
    Free = "free",
}

class Product {
    type: ProductType;

    constructor(type: ProductType) {
        this.type = type;
    }
}

export default Product;