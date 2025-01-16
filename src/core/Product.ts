import Id from "./shared/Id";

export default class Product {
  code: string;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.code = Id.new();
  }
}