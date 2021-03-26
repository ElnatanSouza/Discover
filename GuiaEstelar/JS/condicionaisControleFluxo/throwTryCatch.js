// throw (Lançar)

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }

  console.log('depois do erro')
}

// try (tentar)...catch (capturar)

try {
  sayMyName()
} catch (err) {
  console.log(err)
}

console.log('Após a função de erro')

/*
  RESUMINDO!

      O try tenta executar o codigo, que nesse caso foi a função sayMyName e como essa função não recebeu parametros, está vazia, e o throw lançou esse erro mostrando na tela o que foi pedido para o throw fazer.

      É possivel usar o throw sem p try...catch, porém ele vai parar a aplicação inteira se for "lançado" algum erro ou seja: vai parar o fluxo da aplicação, por esse motivo é tão importante usar o try...catch
*/
