/*
  Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

/* É uma boa pratica começar uma função construtora com a primeira letra 
maiuscula */
function Person(name) {
  //this é uma palavra chave
  this.name = name
  this.walk = function() {
    return this.name + " está andando"
  }
}
//recebe a palavra new // e cria um novo Objeto dentro da função
const elnatan = new Person('Elnatan') 
const rita = new Person('Rita')
console.log(elnatan.walk())
console.log(rita.walk())
