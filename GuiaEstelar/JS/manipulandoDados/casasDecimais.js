/*
  ## Transformar um numero quebrado com 2 casas decimais e trocar ponto 
  por virgula
*/
let number = 794.4651156786
console.log(number.toFixed(2).replace(".", ",")) /* o metodo toFixed() separa 
depois do '.' apenas duas casas decimais, ja o metodo replace() 
troca o '.' por ','*/
