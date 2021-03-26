// Operador Condicional (Ternãrio)

// Dependendo da condição, nos receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manha top
let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

// Maior de 18
let age = 18
const canDrive = age >= 18 ? 'Can drive' : "can't drive"
console.log(canDrive)
