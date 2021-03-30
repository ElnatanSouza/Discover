/*
  for...of 
    Ele tambem vai criar um loop, porem atraves de uma variavel previamente 
    declarada

  Ex:
*/

let name = 'Elnatan'
for (let char of name) {
  console.log(char)
}
/* nesse exemplo acima o for...of seleciona cada caracterie da variavel name e 
cria um loop mostrando uma letra abaixo da outra */

let names = ['Jõao', 'Billy', 'Pedro']
for(let name of names) {
  console.log(name)
}
/* já nesse exemplo o for...of seleciona cada posição do array e cria um loop 
com os nomes no array */
