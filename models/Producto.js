import Card from "./Card";

export default class Producto {
  #codigo = 0;
  #nombre = "";
  #cantidad = 0;
  #costo = 0;
  #handles = {};

  constructor({ nombre, cantidad, costo }, handleDelete, handleUpdate) {
    this.#codigo = this.#codigo;
    this.#nombre = nombre;
    this.#cantidad = Number(cantidad);
    this.#costo = Number(costo);
    this.#card = new Card(this.getFullValue, handleDelete, handleUpdate);
  }

  renderOnHtml() {
    this.#card.render();
  }

  update({ nombre, cantidad, costo }) {
    this.#nombre = nombre;
    this.#cantidad = cantidad;
    this.#costo = costo;
  }

  get getNombre() { return this.#nombre; }

  get getFullValue() {
    return {
      codigo: this.#codigo,
      nombre: this.#nombre,
      cantidad: this.#cantidad,
      costo: this.#costo
    }
  }
}