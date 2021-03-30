/*
  ## Verificar se o texto contém a palavra "Amor"
*/

let phrase = "Eu quero é viver o Amor"
console.log(phrase.includes("Amor")) /* nesse exemplo retorna true porem o 
includes é caseSensitive, se a palavra "Amor" estiver com a primeira letra 
em minusculo o includes nao encontra. */

console.log(phrase.includes("amor")) // Então retorna false
