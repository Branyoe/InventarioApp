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
    let foundProduct, i = 0;
    do{
      if (this.#products[i]?.getCode === code) foundProduct = this.#products[i];
      i++;
    }while(!foundProduct && i < this.#products.length);
    return foundProduct;
  }

  delete(code) {
    let i = 0, deleted = false;
    do{
      if (this.#products[i].getCode === code) {
        this.#products = Utilidades.removeItemFromArray(i, this.#products);
        deleted = true;
      }
      i++;
    }while(!deleted && i < this.#products.length);
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