import { generateId } from "@/helpers/string";

export default class Product {
  readonly id: string;
  name: string;
  type: string;
  price: number;
  imageUrl: string;

  constructor({name, type, price, imageUrl}: Product) {
    this.id = generateId();
    this.name = name;
    this.type = type;
    this.price = price;
    this.imageUrl = imageUrl
  }
}
