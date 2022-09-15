export default class Form{
  #nameInp = null;
  #quantityInp = null;
  #costInp = null;

  constructor(nameInp, quantityInp, costInp){
    this.#nameInp = nameInp;
    this.#quantityInp = quantityInp;
    this.#costInp = costInp;
  }

  get getValue(){ 
    return {
      name: this.#nameInp.value,
      quantity: Number(this.#quantityInp.value),
      cost: Number(this.#costInp.value)
    }
  }

  reset(){
    this.#nameInp.value = '';
    this.#quantityInp.value = '';
    this.#costInp.value = '';
  }
}