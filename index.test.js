const { dividirNumeroPor2 } = require("./index");

test("deve ser somado 1 em todos os numeros da lista", () => {
  const lista = [4, 8, -6, 500, 10];

  const resultado = dividirNumeroPor2(lista);

  expect(resultado).toEqual([2, 4, -3, 250, 5]);
});
