import Product from "./Product";

export default class ProductRepository {
    items: Product[] = [
        new Product('Mackbook', 15000),
        new Product('iPhone', 5000),
        new Product('Air Pods', 2000)
    ];

    getAll() {
        return this.items;
    };

    getById(code: string) {
        const data = this.items.find(product => product.code === code);
        return data;
    };

    create(name: string, price: number) {
        const data = new Product(name, price);
        this.items.push(data);
    };

    update(code: string, name: string, price: number) {
        const data = this.items.findIndex(product => product.code === code);
        if (data >= 0 && data < this.items.length) {
            if (name) {
                this.items[data].name = name;
            };
            if (price) {
                this.items[data].price = price;
            };
        };
    };

    delete(code: string) {
        const data = this.items.filter(product => product.code !== code)
        this.items = [...data];
    };
}