import Utilidades from "../Utilidades.js";
import Card from "./Card.js";
import Producto from "./Producto.js";

export default class Inventario {
  #products = [];
  #cards = [];
  #form = null;
  #btnSubmit = null;
  #cardsContainer = null;

  constructor(form, btnSubmit, cardsContainer) {
    this.#products = this.#products;
    this.#cards = this.#cards;

    this.#form = form;
    this.#btnSubmit = btnSubmit;
    this.#cardsContainer = cardsContainer;

    this.#btnSubmit.addEventListener('click', event => {
      event.preventDefault();

      const newProduct = new Producto(this.#products.length + 1,this.#form.getValue);
      this.add(newProduct);
    });
  }

  get listado() { return this.#products };

  add(product) {
    // const newCard = new Card(product.getFullValue, (code) => this.delete(code), (code, newData) => this.update(code, newData)
    // );

    // this.#cards.push(newCard);
    this.#products.push(product);
    
    this.#cardsContainer.prepend(newCard.render());
  }

  update(code, newData) {
    this.#products[code - 1].setFromObj(newData);
    console.log(this.#products[code - 1]);
  }

  delete(code) {
    this.#cards[code - 1].remove();
    
    this.#products = Utilidades.removeItemFromArray(code-1, this.#products);
    this.#cards = Utilidades.removeItemFromArray(code-1, this.#cards);
  }
}