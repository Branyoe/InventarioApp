class Utilidades{
  static selector(id = ''){
    return document.getElementById(`${id}`);
  }

  static removeItemFromArray(index = 0, vector = []){
    vector[index] = null;

    let vecUpdated = [];

    for (let i = 0; i < vector.length; i++) {
      const element = vector[i];
      
      if(element != null) vecUpdated.push(element);
    }

    return vecUpdated;
  }
}

export default Utilidades;

