class regraDeTres {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.result;
  }

  // se em 20 caixa tem 10 livros
  // quantos livros terão em 30 caixas
  // 20 = 10
  // 30 = x

  // 10 x 30 / 20 = x

  calcularRegraDeTres() {
    this.result = (this.x * this.z) / this.y;
    return this.result;
  }
}

export default regraDeTres;
