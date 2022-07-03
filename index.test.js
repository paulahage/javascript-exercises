const { somar } = require("./index");

test('a soma deve ser correta', () => {
  const numeroA = 2;
  const numeroB = 3;

  const resultado = somar(numeroA,numeroB);

  expect(resultado).toBe(5)
})

test("a soma deve ser correta", () => {
  const numeroA = 10;
  const numeroB = 3;

  const resultado = somar(numeroA, numeroB);

  expect(resultado).toBe(13);
});
