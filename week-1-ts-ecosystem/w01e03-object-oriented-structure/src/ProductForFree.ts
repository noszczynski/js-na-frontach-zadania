import Product, {ProductType} from "./Product";

class ProductForFree extends Product {
    #type: ProductType.Free;

    constructor(name: string, count: number) {
        super(name, ProductType.Free, count);
    }
}

export default ProductForFree;