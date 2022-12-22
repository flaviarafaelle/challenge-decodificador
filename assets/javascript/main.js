function myFunction() {
  const texto = document.getElementById("text-input-field")?.value;
  const decodificado = document.getElementById("myDIV");
  decodificado?.textContent=texto
}

//1 remover conteudo dentro da div
//2 colocar valor texto dentro da div que sumiu
//3 pegar valor do texto e separar em array (banana split)
//4 fazer um for, olhando o array (passo 3)
//5 criar verificacores (if's) p cada letra
//6 se if verdadeiro, alterar valor posicao encontrada
//7 confirmar se passo 2 funciona