export default class Producto {
  #code = 0;
  #nombre = "";
  #cantidad = 0;
  #costo = 0;

  constructor({nombre, cantidad, costo}) {
    this.#code = this.#code;
    this.#nombre = nombre;
    this.#cantidad = Number(cantidad);
    this.#costo = Number(costo);
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