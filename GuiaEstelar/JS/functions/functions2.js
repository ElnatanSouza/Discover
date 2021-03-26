// ## Paramentros e Argumentos

/* 
  função anonima
  function expression 
  function anonymous
*/

// Parâmetros da função (parameters)
const sum = function (number1, number2) {
  let total = (number1 + number2)
  return total // Sem o return a função não é executada fora do escopo. A função precisa retornar algo
}

// Arguments - argumentos
sum(2, 3)

let number1 = 34
let number2 = 25

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)