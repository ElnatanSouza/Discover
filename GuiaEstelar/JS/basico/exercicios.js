// ## Exercicios

// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dade é a variavel acima?
console.log(typeof weight)
// weight é undefined

/*
  3. Declare uma variavel e atria valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/
let name, age, stars, isSubscribed

name = "Elnatan"
age = 27
stars = 5.5
isSubscribed = true

console.log(`
   ${name} é ${typeof name}, 
   ${age} é ${typeof age}, 
   ${stars} é ${typeof stars},
   ${isSubscribed} é ${typeof isSubscribed}
   `)

/*
   4. A variavel student abaixo é de que tipo de dados

   4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

   4.2 Mostre o console a seguinte mensagem:
     <name> de idade <age> pesa <weight> kg.
     Atenção, substitua <name> <age> e <weight> pelos valores de cada
     propriedade do objeto

*/

// ## RESPOSTAS

// Student é um objeto console.log(typeof student)
let student = {
  name: 'Jerry',
  age: 17,
  weight: 54.4
}

console.log(`${student.name} de ${student.age} pesa ${student.weight}kg`)

/*
  5. Declare uma variavel do tipo Array, de nome students e atribua a ela
  nenhum valor, ou seja, somente Array vazio.
*/
// ## RESPOSTA
let students = []

/*
  6. Reatribua valor a variavel acima, colocando dentro dela o
    objeto student da questão 4.(Não copiar e colar o objeto, mas
    usar o objeto criado e inserir ele no Array)
*/
// ## RESPOSTA
students = [
  student
]
console.log(students)

/*
  7. Coloque no console o valor da posição zero do Array acima
*/
// ## RESPOSTA
console.log(students[0])

/*
  8. Crie um novo student e coloque na posição 1 do
  Array students
*/
// RESPOSTA
let secondStudent = {
  name: "Priscila",
  age: 33,
  weight: 64.7
}

students = [
  student,
  secondStudent
]
console.log(students)
/* Ou ao invés de reescrever simplismente usar o seguinte: 
  Ex: students[1] = secondStudent
*/

/*
  9. Sem rodar o codigo responda qual é a resposta do 
  codigo abaixo e por que? Após sua resposta rode o
  codigo e veja se você acertô miseravi.

  ## Código
    console.log(a)
    var a = 1
*/
/*
  ## RESPOSTA
    A resposta equivale a undefined, porque essa palavra reservada (var)
    faz o hosting(elevação) do valor da variavel, porem retorna como
    undefined, pois o valor de "a" ainda não esta criada, so será criada
    depois do console
*/
console.log(a)
var a = 1
