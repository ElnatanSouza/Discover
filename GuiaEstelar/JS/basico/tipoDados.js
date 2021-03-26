/*
String
  * Cadeia de Caracteres 
*/

/* "" - Pode sem feito com aspas duplas - se eu for usar aspas simples dentro
do conteudo, é melhor começar com aspas duplas */
console.log("El'nat'an");

/* '' - Aspas Simples - Se eu for usar aspas duplas dentro de um texto 
é melhor começar esse texto com aspas simples */
console.log('S"ou"za');

/* `` - Template String/Template Literals - Nesse exemplo eu posso usar 
multiplas linhas ou até mesmo colocar valores(interpolar) */
console.log(`
Elnatan
Souza
Coelho ${1 + 1}
`);

/*
  Numbers
    *números

      //Inteiros (27)
      //Reais (10.5)/ float
      //NaN (Not a Number)
      //Infinity (infinito)-- importante deixar com I maiusculo
*/

/*
  Boolean
    *trabalha somente com 2 valores

      true (verdadeiro)
      false (false)
*/

/*
  *undefined
    *indefinido - algo que não existe

  *null
    *nulo
    *objeto que não possui nada dentro
    *diferente de indefinido
*/

/*
  Object
    *Objeto
    * Propriedades (atributos)
    * Funcionalidades (metodos)

    {propriedade : "valor"}
*/

console.log({
  name: "Elnatan",
  age: "27",
  walk: function () {
    console.log('Sim ele anda!');
  },
});

/*
  Array (Vetores)
    *Uma lista
    *Agrupamento de dados

    ["Elnatan", 27]
*/

console.log([
  "Elnatan",
  "Patricia",
  "Chico",
  "Dinoráh",
]);

/*

## Tipos de dados

  Conforme o ECMAScript standard, temos 9 tipos de dados:

    ## Data types
      * Primitive / Primitive value
      * Structural
      * Structural Primitive

    ## Primitivos - primitivos não é objeto e eles não
    sofrem alterações

      * String
      * Number
      * Boolean
      * undefined
      * Symbol
      * BigInt

    ## Estruturais

      * Object
        * Array
        * Map
        * Set
        * Date
        * . . .

      * Function

    ## Primitivo Estrutural / Structural Root Primitive

      * null
*/

// typeof antes da variável mostra o tipo da variavel
