/*
  switch

    A condicional switch se assemelha muito ao if e else, porém a estrutura é 
    outra.


    Ex:
*/

let expression = ''

switch (expression) {
  case 'a':
    // codigo
    console.log('a')
    // o break mostra que o caso 'a' acabou
    break
  case 'b':
    // codigo para a expression b
    console.log('b')
    break
  default: // não cumpriu nenhum caso acima, retorne o default
    console.log('default')
    break
}

/* O break é opcional, porém, se não usarmos o mesmo, a condição passa para o 
proximo case, então o break mostra que a expression foi encontrada, 
então pare o algoritimo 

Outro Ex:
*/

function calculate(number1, operator, number2) {
  let result = 0

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('Não implementado!')
      break
  }

  return result

}

console.log(calculate(4, '+', 8))
