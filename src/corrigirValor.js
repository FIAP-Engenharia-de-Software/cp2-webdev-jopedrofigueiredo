// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. 
//Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  let novoValor = parseInt(valor);
  if ((typeof novoValor) == `Int` || (typeof novoValor) === `Integer`) {
    return novoValor
  } 
  if ((typeof novoValor) !== `Int` || (typeof novoValor) !== `Integer`) {
    return ("Valor inválido")
  }
}

corrigirValor(`5`)

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };