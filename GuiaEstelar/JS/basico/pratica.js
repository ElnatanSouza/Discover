// declaration
var name

// assignmet/ atribuição de valores
name = "Elnatan"

// Typeof
console.log(typeof name)

// Agrupamento de declarações

let age, isHuman

age = 27
isHuman = true

// Multiplos argumentos
console.log(name, age, isHuman)

/* Interpolando em formato de texto com variaveis 
usando template strig */
console.log(`O ${name} tem ${age} anos de idade!`)

// Concatenando SEM template string
console.log('O ' + name + ' tem ' + age + ' anos de idade. . .')

// Object

const person = {
  name: 'Pedro',
  age: 25,
  weight: 75.4,
  isAdmin: false,
}
// Obtendo somente a propriedade do objeto
console.log(`${person.name} tem ${person.age}!`)

// Array

const animals = [
  'Lion',
  'Monkey',
  {
    name: 'Cat',
    age: 1
  }
]
// Acessar todos valores do Array
console.log(animals)
// Acessando apenas um valor do Array
console.log(animals[1])
// Acessando o total de itens no Array
console.log(animals.length)
// Acessando os valores de um Objeto no Array
console.log(animals[2].name)
