var textInput = document.querySelector("input");
var outInput = document.querySelector("output");

function criptografar() {
  var texto = textInput.value;

  var resultCripto = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("output").innerHTML = "" + resultCripto + "";
}

function descriptografar() {
  var texto = textInput.value;

  var resultDescripto = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("output").innerHTML = "" + resultDescripto + "" ;
}

function copiartexto() {
  var textoCop = document.getElementById("output");
  textoCop.select();
  document.execCommand("copy");
  alert("Texto copiado");
}

