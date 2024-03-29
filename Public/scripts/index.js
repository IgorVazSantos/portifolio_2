const anocopyright = document.getElementById("copyright");
const anoAtual = new Date().getFullYear();

anocopyright.innerHTML = '&copy '+`${anoAtual}` +' - Igor Vaz';



const logo = document.getElementById("logo");
const novaImagem = document.createElement("img");
  novaImagem.src = "./imagens/Meulogo_200px.png";
  novaImagem.alt = "Logo";
  novaImagem.id = "logo200px";

function changeToLogo() {
    logo.innerHTML = "";
    logo.appendChild(novaImagem)
}

setTimeout(changeToLogo, 4000)