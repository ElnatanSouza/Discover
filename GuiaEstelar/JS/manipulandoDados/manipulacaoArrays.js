/*
 ## Manipulando Arrays
*/

let techs = ["html", "css", "js"]

  // * adicionar um item no fim
    techs.push("nodejs")
  // * adicimar no começo
    techs.unshift("sql")
  // * remover no fim
    techs.pop()
  // * remover no começo
    techs.shift()
  // * pegar somente alguns elementos do array
    console.log(techs.slice(1, 3))
  // * remover 1 ou mais items de qualquer posição do array
    techs.splice(1, 2)
  // * encontrar a posição de um elemento no array
    let index = techs.indexOf('css')

console.log(techs)
