import Product, {ProductId} from "./Product";
import ProductForFree from "./ProductForFree";

type Products = Map<ProductId, Product>;

class Cart {
    #products: Products = new Map();

    constructor() {
        //
    }

    addProduct (product: Product): void {
        this.products.set(product.id, product);
    }

    getProduct (productId: ProductId): void {
        this.products.get(productId);
    }

    updateProduct (product: Product): void {
        this.products.set(product.id, product);
    }

    deleteProduct (productId: ProductId): void {
        this.products.delete(productId);
    }

    get products (): Products {
        return this.#products
    }

    countProducts (): number {
        return this.products.size;
    }

    sumProducts (): number {
        const arr: [string, Product][] = Array.from(this.products);

        return arr.reduce((sum, [, product]) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (product instanceof ProductForFree || !product.price) {
                return sum;
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            sum += product.price * product.count;
            return sum;
        }, 0);
    }
}

export default Cart;