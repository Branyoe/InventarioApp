export default class Form{
  //********Propertys********
  #nameInp = null;
  #quantityInp = null;
  #costInp = null;

  //********Methods********
  constructor(nameInp, quantityInp, costInp){
    this.#nameInp = nameInp;
    this.#quantityInp = quantityInp;
    this.#costInp = costInp;
  }
  
  reset(){
    this.#nameInp.value = '';
    this.#quantityInp.value = '';
    this.#costInp.value = '';
  }
  
  //getters
  get getValue(){ 
    return {
      name: this.#nameInp.value,
      quantity: Number(this.#quantityInp.value),
      cost: Number(this.#costInp.value)
    }
  }

}