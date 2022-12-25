function codificar() {
  const texto = document.getElementById("text-input-field")?.value;

  if(validar(texto)) {
    alert("Apenas letras minúsculas e sem acento.");
    document.getElementById("text-input-field").value = "";
    return;
  }

  const modalInstrucoes = document.getElementById("modalInstrucoes");
  modalInstrucoes.style = "display: none;";

  const modalCodificado = document.getElementById("modalCodificado");
  modalCodificado.style = "";

  let split = texto.split("");
  console.log(split);

  for (let i = 0; i <= split.length; i++) {
    if (split[i] === "a") {
      split[i] = "ai";
    } else if (split[i] === "e") {
      split[i] = "enter";
    } else if (split[i] === "i") {
      split[i] = "imes";
    } else if (split[i] === "o") {
      split[i] = "ober";
    } else if (split[i] === "u") {
      split[i] = "ufat";
    }
  }

  modalCodificado.innerHTML = split.join("");
}

function validar (texto) {
  return (texto.match(new RegExp("[A-Z]|[À-Ú]|[à-ú]")))
}

function decodificar (){
  let texto = document.getElementById("text-input-field")?.value;

  if(validar(texto)) {
    alert("Apenas letras minúsculas e sem acento.");
    document.getElementById("text-input-field").value = "";
    return;
  }

  const modalInstrucoes = document.getElementById("modalInstrucoes");
  modalInstrucoes.style = "display: none;";

  const modalCodificado = document.getElementById("modalCodificado");
  modalCodificado.style = "";

  texto = texto.replace("ai", "a")
  texto = texto.replace("enter", "e")
  texto = texto.replace("imes", "i")
  texto = texto.replace("ober", "o")
  texto = texto.replace("ufat", "u")
  modalCodificado.innerHTML = texto
}