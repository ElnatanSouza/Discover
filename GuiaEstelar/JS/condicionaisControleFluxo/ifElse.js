// Control flow

/*
  If...else

  São as principais condiçõess para o controle de fluxo, pois caso não o 
  programa nao entre em uma condição, entra em outra sem mostrar todas as 
  opções na tela.

  Se entrar em alguma condição o resto é simplismente desconsiderada

  EX: 
    Digamos que mediremos um determinado grau de febre onde 36.5 é a 
    temperatura ideal.
*/

let temperature = 36.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(mediumTemperature) {
  console.log('Febre Moderada.')
// Aqui juntamos as duas condições para criar uma nova condicional else if () {}
} else if (highTemperature) {
  console.log('Febre Alta!')
} else {
  console.log('Não apresenta febre.')
}
