const dividirNumeroPor2 = (listaDeNumeros) => {
  let listaDivididaPor2 = [];

  for (let i = 0; i < listaDeNumeros.length; i++) {
    listaDivididaPor2.push(listaDeNumeros[i] / 2);
  }

  return listaDivididaPor2;
};

module.exports = {
  dividirNumeroPor2,
};
