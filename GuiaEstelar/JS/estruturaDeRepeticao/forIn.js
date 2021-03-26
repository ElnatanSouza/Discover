/*
  for...in
    Ele cria um loop em cima de um objeto, ele pega as propriedades do objeto.

  Ex:
*/

let person = {
  name: 'John',
  age: 30,
  weight: 94.1
}

for (let property in person) {
  console.log(property)
  console.log(person[property])
}

// Então acima temos o for...in pegando as propriedades de um objeto e atribuindo as mesmas na variavel property
