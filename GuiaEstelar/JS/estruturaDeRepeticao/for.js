/*
  Estrutura de repetição

  for (para)

  break - para a execução do loop
  continue para pular a execução do momento
*/

for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue; // então aqui ele ignora o numero 5
  } else if (i === 3) {
    break; // e aqui ele para no numero 3 (nao executa mais o loop)
  }
  console.log(i)
}
