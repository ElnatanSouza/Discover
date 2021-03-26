/*
  ## Scope
    * Escopo determina a visibilidade de alguma variável no JS

  ## Block statment

    inicio do bloco
  {
    qualquer codigo aqui dentro
  }
*/

{
  let x = 0
  console.log(x)
}

/*
  ## Variáveis
    * Nomes Simbólicos para receber
     algum valor(os tipos de dados)
    * Atalhos de Código
    * Identificadores
    
  ## 3 palavras reservadas para criar uma variavel
    * var - essa palavra reservada é Global e local, então vaza no scope, e 
            tambem ocorre aqui a elevação (hoisting).
              Ex: 
              console.log(`O valor de x é igual a ${x}`)

              {
                var x = 15
                console.log(x)
              }

            Então aqui antes mesmo de ser criada ela ja é chamada, porém como
            undefined.

            ## VAMOS EVITAR O USO DA PALAVRA RESERVADA "var" ##

    * let - essa palavra não vaza no scope, então ela so funciona dentro 
            do bloco
    * const - essa variavel não pode ser alterado o seu valor primario e tambem
            nao vaza no scope
*/

let clima = "Frio"
clima = "Quente"
console.log(clima)

/*
  O JS é uma linguagem fracamente tipada e dinâmica

    * Variáveis não precisam ter um tipo previamente definido
    * Podemos mudar o conteúdo da variável

*/

/*
  ## Criando nomes para variáveis
    
    * JS é case-sensitive(sensível ao caso)
    * JS aceita cadeia de caracteres Unicode
    
    # Posso:
      * Iniciar com caracteres especiais: $%&
      * Iniciar com letras
      * Colocar acentos
      * Letras maiusculas e minusculas fazem diferença
    
    # Não Posso:
      * Iniciar com numeros
      * Colocar espaços vazios no nome
    
    # Ideal:
      * Criar nomes que fazem sentido
      * Que explique o que a variável é ou faz
      * camelCase
      * snake_case
      * Escrever em inglês
  
*/