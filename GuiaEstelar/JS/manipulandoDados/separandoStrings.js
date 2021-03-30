/*
  ## Separe um texto que contem espaços, em um novo array onde cada texto 
  é uma posição do array. Depois disso, transforme o array em um texto e 
  onde eram espaços use o _
*/

let phrase = "Eu quero viver o Amor"
let myArray = phrase.split(" ") /* o metodo split separa a frase em um array, 
nesse caso pedi para separa depois de cada espaço vazio. */

console.log(myArray)
let phraseWithUnderscore = myArray.join("_") /* Já nesse exemplo usei como 
separador um underline. */
console.log(phraseWithUnderscore)
