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

  update(code, newData) {
    this.#products[code - 1];
    console.log(this.#products[code - 1]);
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
  get getList() { return this.#products };

  get getInvertedList() {
    let invertedList = [];
    for (let i = this.#products.length - 1; i >= 0; i--) {
      const element = this.#products[i];
      invertedList.push(element);
    }
    return invertedList;
  }

  get getListInString() {
    if(this.#products.length === 0) return '';
    let listInString = '[';
    for (let i = 0; i < this.#products.length - 1; i++) {
      const product = this.#products[i];
      listInString += JSON.stringify(product.getValue) + ', ';
    }
    listInString += JSON.stringify(this.getLastProduct.getValue) + ']';

    return listInString;
  }
}