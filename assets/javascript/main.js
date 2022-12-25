function codificar() {
  const texto = document.getElementById("text-input-field")?.value;

  if (validar(texto)) {
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
  const codificado = document.getElementById("codificado");
  codificado.innerHTML = split.join("");
}

function validar(texto) {
  return texto.match(new RegExp("[A-Z]|[À-Ú]|[à-ú]"));
}

function decodificar() {
  let texto = document.getElementById("text-input-field")?.value;

  if (validar(texto)) {
    alert("Apenas letras minúsculas e sem acento.");
    document.getElementById("text-input-field").value = "";
    return;
  }

  const modalInstrucoes = document.getElementById("modalInstrucoes");
  modalInstrucoes.style = "display: none;";

  const modalCodificado = document.getElementById("modalCodificado");
  modalCodificado.style = "";

  texto = texto.replaceAll("ai", "a");
  texto = texto.replaceAll("enter", "e");
  texto = texto.replaceAll("imes", "i");
  texto = texto.replaceAll("ober", "o");
  texto = texto.replaceAll("ufat", "u");

  const codificado = document.getElementById("codificado");

  codificado.innerHTML = texto;
}

function copiar(){
  const text = document.getElementById("codificado")?.innerText;
  navigator.clipboard.writeText(text)
}