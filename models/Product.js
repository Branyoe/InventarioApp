export default class Product {
  //********Propertys********
  #code = 0;
  #name = "";
  #quantity = 0;
  #cost = 0;


  //********Methods********
  constructor({ name, quantity, cost }) {
    this.#code = this.#code;
    this.#name = name;
    this.#quantity = quantity;
    this.#cost = cost;
  }

  update({name, quantity, cost}) {
    this.#name = name;
    this.#quantity = quantity;
    this.#cost = cost;
  }

  //getters
  get getCode() { return this.#code; }
  get getName() { return this.#name; }
  get getQuantity() { return this.#quantity; }
  get getCost() { return this.#cost; }
  get getValue() {
    return {
      code: this.#code,
      name: this.#name,
      quantity: this.#quantity,
      cost: this.#cost
    }
  }
  get getValueInString() { return `{code: ${this.#code}, name: ${this.#name == "" ? '""' : this.#name}, quantity: ${this.#quantity}, cost: ${this.#cost}}` }

  //setters
  setCode = code => this.#code = code;
  setName = name => this.#name = name;
  setQuantity = quantity => this.#quantity = quantity;
  setCost = cost => this.#cost = cost;
}