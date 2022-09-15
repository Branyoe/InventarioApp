export default class Form{
  nombreInp = null;
  cantidadInp = null;
  costoInp = null;

  constructor(nombreInp, cantidadInp, costoInp){
    this.nombreInp = nombreInp;
    this.cantidadInp = cantidadInp;
    this.costoInp = costoInp;
  }

  get getValue(){ 
    return {
      nombre: this.nombreInp.value,
      cantidad: this.cantidadInp.value,
      costo: this.costoInp.value
    }
  }

  reset(){
    this.nombreInp.value = '';
    this.cantidadInp.value = '';
    this.costoInp.value = '';
  }
}