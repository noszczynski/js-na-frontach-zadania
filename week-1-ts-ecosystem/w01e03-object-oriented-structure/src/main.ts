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
import { ProductType } from "./Product";
import ProductForAuction from "./ProductForAuction";
import ProductToBuy from "./ProductToBuy";

const exampleCart1 = new Cart();
const exampleCart2 = new Cart();
const exampleCart3 = new Cart();

exampleCart1.addProduct(new ProductToBuy("Marchewka opakowanie 1kg", 2.19, 12))
exampleCart1.addProduct(new ProductToBuy("Ziemniaki siatka 5kg", 4.59, 3))
exampleCart1.addProduct(new ProductForAuction("Konsola PS4 Slim", 1299, 1))

console.log(exampleCart1.sumProducts())

export {};
