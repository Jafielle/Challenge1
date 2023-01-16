//Vars needed / Variables necesitadas
const encryptBtn = document.querySelector("#encriptar");
const decryptBtn = document.querySelector("#desencriptar");
const copyBtn = document.querySelector("#copiar");
const containerPj = document.querySelector(".container-pj");
const containerH2 = document.querySelector(".container-h2");
const containerP = document.querySelector(".container-p");

const output = document.querySelector('.output');

const outputTxt = document.querySelector('.output-txt');

//Buttons functionalities / Funcionalidades de los botones
encryptBtn.onclick = encrypt;
decryptBtn.onclick = decrypt;
copyBtn.onclick = copy;


//Functions / Funciones

function returnTxtInput() {
      let area = document.querySelector("#area");
      return area.value
}//to select the textarea input / Para seleccionar el input de Textarea

function hideFront() {
      containerPj.classList.add("hide");
      containerH2.classList.add("hide");
      containerP.classList.add("hide");
      output.classList.remove("hide");
}//to hide the image and text and show the (en/de)crypt results and copy button / Para esconder al imagen, texto y enseñar el resultado (des)encriptado y el boton de copiar

function encryptTxt(msg) {
      const txt = msg;
      let finalTxt = "";
      for (let i = 0; i < txt.length; i++) {
            if (txt[i] == "a") {
                  finalTxt = finalTxt + "ai"
            }
            else if (txt[i] == "e") {
                  finalTxt = finalTxt + "enter"
            }
            else if (txt[i] == "i") {
                  finalTxt = finalTxt + "imes"
            }
            else if (txt[i] == "o") {
                  finalTxt = finalTxt + "ober"
            }
            else if (txt[i] == "u") {
                  finalTxt = finalTxt + "ufat"
            }
            else {
                  finalTxt = finalTxt + txt[i]
            }
      }
      return finalTxt;
}//to Encrypt text/ para encriptar el texto

function encrypt() {
      hideFront();
      let area = returnTxtInput();
      outputTxt.textContent = encryptTxt(area);
}//to call encrypt text and hide functions/ para llamar a la funcion de encriptado y de esconder seccion 2 y enseñar el resultado...

function decryptTxt(msg) {
      const txt = msg;
      let finalTxt = "";
      for (let i = 0; i < txt.length; i++) {
            if (txt[i] == "a") {
                  finalTxt = finalTxt + "a";
                  i = i + 1;
            }
            else if (txt[i] == "e") {
                  finalTxt = finalTxt + "e";
                  i = i + 4;
            }
            else if (txt[i] == "i") {
                  finalTxt = finalTxt + "i";
                  i = i + 3;
            }
            else if (txt[i] == "o") {
                  finalTxt = finalTxt + "o";
                  i = i + 3;
            }
            else if (txt[i] == "u") {
                  finalTxt = finalTxt + "u";
                  i = i + 3;
            }
            else {
                  finalTxt = finalTxt + txt[i]
            }
      }
      return finalTxt;
}//to Decrypt text/ para desencriptar el texto

function decrypt() {
      hideFront();
      let area = returnTxtInput();
      outputTxt.textContent = decryptTxt(area);
}//to call decrypt text and hide functions/ para llamar a la funcion de desencriptado y de esconder seccion 2 y enseñar el resultado...


function copy() {
      let toCopy = document.getElementById("to-copy").textContent;
      console.log(toCopy);
      navigator.clipboard.writeText(toCopy).then(
            function () {
                  console.log("texto copiado"); 
            })
} 
//from https://stackoverflow.com/questions/60217202/copy-text-to-clipboard-now-that-execcommandcopy-is-obsolete

//Document.execCommand("copy") Deprecated



