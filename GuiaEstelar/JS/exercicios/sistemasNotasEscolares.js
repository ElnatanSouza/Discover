/*
  ### Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema
    numérico para sistema de notas em caracteres tipo
    A B C

    * de 90 para cima   - A
    * entre 80 - 89     - B
    * entre 70 - 79     - C
    * entre 60 - 69     - D
    * menor que 60      - F

*/

// Resolvendo com estrutura if...else

const getScore = (score) => {
  if (score >= 90 && score <= 100) {
    alert('Sua nota é A')
  } else if (score >= 80 && score <= 89) {
    alert('Sua nota é B')
  } else if (score >= 70 && score <= 79) {
    alert('Sua nota é C')
  } else if (score >= 60 && score <= 69) {
    alert('Sua nota é D')
  } else if (score < 60 && score >= 0) {
    alert('Sua nota é F')
  } else {
    alert('Nota inválida')
  }
}

getScore(prompt('Qual é a sua nota?'))
