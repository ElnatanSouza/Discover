/*
  ### Sistema de gastos familiar

  Crie um objeto que possuirá 2 propriedades, ambas 
  do tipo array:

    * receitas: []
    * despesas: []
  
  Agora, crie uma função que irá calcular o total de 
  receitas e despesas e irá mostrar uma mensagem se a
  família está com saldo positivo ou negativo, seguido
  do valor do saldo

*/

const family = {
  receitas: [157.49, 507.94, 500.89],
  despesas: [104.34, 48.23, 1500, 64]
}

const sum = (array) => {
  let total = 0
  for (let value of array)
    total += value
  return total
}

const calculateBalance = () => {
  const calculateReceita = sum(family.receitas)
  const calculateDespesas = sum(family.despesas)

  const total = calculateReceita - calculateDespesas
  const itsOk = total >= 0
  let balanceText = "Negativo!"

  if (itsOk) {
    balanceText = "Positivo!"
  }

  alert(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)

}

calculateBalance()