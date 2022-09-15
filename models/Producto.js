export default class Producto {
  #code = 0;
  #nombre = "";
  #cantidad = 0;
  #costo = 0;

  constructor({name, quantity, cost}) {
    this.#code = this.#code;
    this.#nombre = name;
    this.#cantidad = quantity;
    this.#costo = cost;
  }

  //Pendiente al final
  // update({ nombre, cantidad, costo }) {
  //   this.#nombre = nombre;
  //   this.#cantidad = cantidad;
  //   this.#costo = costo;
  // }

  get getNombre() { return this.#nombre; }
  get getCode() { return this.#code; }

  get getFullValue() {
    return {
      codigo: this.#code,
      nombre: this.#nombre,
      cantidad: this.#cantidad,
      costo: this.#costo
    }
  }

  setCode = (code) => this.#code = code; 
}