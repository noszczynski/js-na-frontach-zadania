import prompts from "prompts";
import fs from "fs";
import { faker } from '@faker-js/faker';
import Product, {ProductType} from "./Product";

const questions = [
    { title: 'Kup Teraz', value: ProductType.Buy, },
    { title: 'Za darmo', value: ProductType.Free },
    { title: 'Aukcja', value: ProductType.Auction }
];

//TODO
// - Program powinien dawać możliwość usuwania danych
// - Demo może być uruchamiane z pliku np. src/showcase-demo.ts czyli wynikowo: dist/showcase-demo.js. Musi ono pokazywać wszystkie dane z pliku załadowane do pamięci. Więc jakiekolwiek operacje na danych, nie powinny mieć wpływu na to, co jest w pliku.
// - Finalnie możesz w obydwu programach zastosować te same klasy - dla wygody podejścia, jednak wykorzystując mechanizm kompozycji lub dziedziczenia, rozszerzyć możliwości CLI o tryb "persistence", zapisu i odczytu danych z pliku .json

const saveProductsToFile = async (arr: Product<any>[]): Promise<void> => {
    let data;

    await fs.readFile("./persistent-data/cart-items.json","utf-8",(err, readData) => {
        data = readData;
        console.log(readData);
    })

    console.log(typeof data, data);
}

(async () => {
    saveProductsToFile([]);
    return;

    const { type, confirm } = await prompts([
        {
            type: 'select',
            name: 'type',
            message: 'Jaki produkt chcesz dodać?',
            initial: 0,
            choices: questions,
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: "Czy wygenerować produkt z danymi fikcyjnymi?"
        }
    ]);

    // czy kończymy, czy dopisujemy znowu

    if (confirm) {
        const { productsToGenerate } = await prompts([
            {
                type: 'number',
                min: 1,
                max: 8,
                name: "productsToGenerate",
                message: 'Ile produktów chcesz wygenerować? (min:1, max:8)',
            }
        ]);

        const arr: Product<any>[] = [];

        for (let i = 0; i < productsToGenerate; i++) {
            arr.push(
                new Product(
                    faker.commerce.productName(),
             type === ProductType.Free ? undefined : Number(faker.commerce.price(1, 2000)),
                    faker.datatype.number({ min: 1, max: 10 }),
                )
            )
        }

        saveProductsToFile(arr);
    } else {
        const { name, count, price } = await prompts([
            {
                type: 'text',
                name: 'name',
                message: "Podaj nazwę produktu:"
            },
            {
                type: 'number',
                name: 'count',
                message: "Podaj ilość:"
            },
            {
                type: 'number',
                name: 'price',
                float: true,
                message: "Podaj cenę jednostkową:"
            }
        ]);

        saveProductsToFile([
            new Product(name, type === ProductType.Free ? undefined : price, count)
        ]);
    }
})()

export {};