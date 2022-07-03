const { dividirNumeroPor2 } = require("./index");

test("deve ser somado 1 em todos os numeros da lista", () => {
  const lista = [4, 8, -6, 500, 10];

  const resultado = dividirNumeroPor2(lista);

  expect(resultado).toEqual([2, 4, -3, 250, 5]);
});

// strings

test("deve ser lido os 3 primeiros caracteres de um nome", () => {
  const nome = "stephano";

  const resultado = nome.slice(0, 3);

  expect(resultado).toEqual("ste");
});

test("deve achar a posicao da palavra 'muito' em uma frase", () => {
  const frase = "essa festa eh muito legal";

  const resultado = frase.indexOf("muito");

  expect(resultado).toEqual(14);
});

test("deve trocar o sobrenome bezerra por martins", () => {
  const nome = "lucas bezerra de castro";

  const resultado = nome.replace("bezerra", "martins");

  expect(resultado).toEqual("lucas martins de castro");
});

test("deve separar as palavras por virgula", () => {
  const frase = "festa,show,top,legal";

  const palavras = frase.split(",");

  expect(palavras).toEqual(["festa", "show", "top", "legal"]);
});

test("deve limpar os espacos extras em uma frase", () => {
  const frase = "   que legal!      ";

  const fraseLimpa = frase.trim();

  expect(fraseLimpa).toEqual("que legal!");
});

test("deve ler apenas o texto comecando do caractere 4 com 10 digitos", () => {
  const texto = "CPF:6432183524VENCIDO";

  const parteDoTexto = texto.slice(4, 14);

  expect(parteDoTexto).toEqual("6432183524");
});

// number

test("deve apenas pegar a parte inteira de um numero", () => {
  const numero = 4.56;

  const numeroInteiro = Math.floor(numero);

  expect(numeroInteiro).toEqual(4);
});

test("deve formatar o numero em apenas 2 decimais", () => {
  const numero = 4365.514846;

  const numeroComDoisDecimais = Number(numero.toFixed(2));

  expect(numeroComDoisDecimais).toEqual(4365.51);
});

test("deve pegar um numero string e somar mais 1.50", () => {
  const numero = "custou mais de: US$ 3.14 dolares";

  const inicioNumero = numero.indexOf("$") + 2;
  const fimNumero = numero.indexOf(" ", inicioNumero);

  const valorParaSomar = numero.slice(inicioNumero, fimNumero);
  const soma = parseFloat(valorParaSomar) + 1.5;
  const valorSomado = Number(soma.toFixed(2));

  expect(valorSomado).toEqual(4.64);
});

// array

test("deve ser utilizado um filtro para filtrar nomes que comecem com M", () => {
  const lista = [
    "carlos",
    "jesa",
    "marcondes",
    "dioguinho",
    "laurinha",
    "Marcela",
    "rodolfin",
  ];

  const resultado = lista.filter((nome) => {
    //TODO fazer a implementacao
    const nomeLowerCase = nome.toLowerCase();

    const resultado = nomeLowerCase.startsWith("m");
    return resultado;
  });

  expect(resultado).toEqual(["marcondes", "Marcela"]);
});


test("deve ser lido a quantidade de caracteres por nome", () => {
  const lista = ["paris", "amsterdam", "sao paulo", "philadelphia"];

  const resultado = lista.map((cidade) => {
    const tamanho = cidade.length
    return tamanho;
  });

  expect(resultado).toEqual([5, 9, 9, 12]);
});

test("deve somar todos os numeros da lista", () => {
  const lista = [1, 50, 100, 200];

  const resultado = lista.reduce((acumulador, item) => {
    acumulador = acumulador + item
    return acumulador;
  }, 0);

  expect(resultado).toEqual(351);
});
