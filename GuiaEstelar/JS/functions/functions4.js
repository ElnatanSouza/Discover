/*
  Function Hoisting
*/

sayMyName()

function sayMyName() {
  console.log('Elnatan')
}

/*
  Quando é feito uma função com alguma expressão (var, let ou const) ela 
  não sofre uma elevação
*/
// Ex:
digaMeuNome()

const digaMeuNome = function () {
  console.log('Natan')
}
