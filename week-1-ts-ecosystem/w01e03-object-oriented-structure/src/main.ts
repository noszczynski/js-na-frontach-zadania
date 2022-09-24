/**
 * To tutaj mamy "START" programu.
 *
 * Przygotuj tutaj kawałek kodu potwierdzający poprawność działania koszyka.
 *
 * Np. Utwórz 3 różne koszyki — dodaj do nich różne produkty.
 * Potem wyświetl te produkty.
 * Wykaż, że koszyki mają różne produkty — inną ich ilość etc.
 * Przygotuj koszyki dla każdego rodzaju produktów.
 * - po prostu: wykaż, że przygotowana logika i modele danych — działają :)
 * */

import Cart from "./Cart";
import Product, {ProductType} from "./Product";

const exampleCart1 = new Cart<ProductType.Buy>();
const exampleCart2 = new Cart<ProductType.Auction>();
const exampleCart3 = new Cart<ProductType.Free>();

/* Core features */
exampleCart1.addProduct(new Product<ProductType.Buy>("Marchewka opakowanie 1kg",2.19, 12));
exampleCart1.addProduct(new Product<ProductType.Buy>("Ziemniaki siatka 5kg",4.59, 3));


exampleCart2.addProduct(new Product<ProductType.Auction>("Konsola PS4 Slim", 1299, 1));

console.log(exampleCart1.sumProducts())

export {};
