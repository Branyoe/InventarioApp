class Utils{
  static selector(id = ''){
    return document.getElementById(`${id}`);
  }

  static removeItemFromArray(index = 0, vector = []){
    for (let i = index; i < vector.length; i++) {
      vector[i] = vector[i+1];
    }
    vector.length -= 1;

    return vector;
  }

  static for(vector, callback){
    for (let i = 0; i < vector.length; i++) {
      callback(vector[i], i)
    }
  }
}

export default Utils;

