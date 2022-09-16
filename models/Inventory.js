import Utilidades from "../Utilidades.js";

export default class Inventory {
  //********Propertys********
  #products = null;
  #codeCounter = 0;

  //********Methods********
  constructor() {
    this.#products = [];
    this.#codeCounter = 1;
  }


  add(product) {
    product.setCode(this.#codeCounter++);
    this.#products.push(product);
  }

  update(code, newValue) {
    const foundProduct = this.search(code);
    foundProduct.update(newValue);
  }

  search(code) {
    let foundProduct
    Utilidades.for(this.#products, product => {
      if (product.getCode === code) foundProduct = product;
    });

    return foundProduct;
  }

  delete(code) {
    Utilidades.for(this.#products, (product, i) => {
      if (product.getCode === code) this.#products = Utilidades.removeItemFromArray(i, this.#products);
    })
  }

  insert(product, index) {
    this.#products.length += 1;
    for (let i = this.#products.length - 1; i >= index; i--) {
      this.#products[i] = this.#products[i - 1];
    }
    this.#products[index] = product;
  }

  //getters
  get getLastProduct() { return this.#products[this.#products.length - 1] }

  get getList() {
    return Utilidades.productsListToString(this.#products);
  };

  get getInvertedList() {
    let invertedList = [];
    for (let i = this.#products.length - 1; i >= 0; i--) {
      invertedList.push(this.#products[i]);
    }
    return Utilidades.productsListToString(invertedList);
  }
}