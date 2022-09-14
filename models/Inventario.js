import Utilidades from "../Utilidades.js";
import Card from "./Card.js";
import Producto from "./Producto.js";

export default class Inventario {
  #products = [];
  #codeCounter = 1;

  constructor() {
    this.#products = this.#products;
  }

  get getLastProduct() { return this.#products[this.#products.length - 1] }

  get getList() { return this.#products };
  get inveseList() {
    let newList = [];
    for (let i = array.length - 1; i >= 0; i--) {
      const element = array[i];
      newList.push(element);
    }
    return newList;
  }

  add(product) {
    product.setCode(this.#codeCounter++);
    this.#products.push(product);
  }

  update(code, newData) {
    this.#products[code - 1];
    console.log(this.#products[code - 1]);
  }

  search(code) {
    let foundProduct
    Utilidades.for(this.#products, (product, i) => {
      if(product.getCode === code) foundProduct = product;
    });
    return foundProduct;
  }

  delete(code) {
    Utilidades.for(this.#products, (product, i) => {
      if(product.getCode === code)
      this.#products = Utilidades.removeItemFromArray(i, this.#products);
    })
  }
}