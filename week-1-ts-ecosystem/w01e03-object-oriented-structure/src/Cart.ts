import { ProductType } from "./Product";

class Cart {
    productType: ProductType;

    constructor(productType: ProductType) {
        this.productType = productType;
    }
}

export default Cart;