/* 
FALSY
  Quando um valor é considerado falso em contextos onde um  booleano é obreigatório (condicionais e loops)

  false
  0
  -0
  ""
  null
  underfined
  NaN

*/
console.log( 0 ? "verdadeiro" : 'falso' )

/*
TRUTHY
  Quando o valor é considerado true em contextos onde booleano é obrigatorio (condicionais e loops)

  true
  {}
  []
  1
  3.23
  "0"
  "false"
  -1
  Infinity
  -Infinity
*/

console.log( {} ? "verdadeiro" : 'falso' )
