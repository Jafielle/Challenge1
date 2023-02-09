const inputSwitch = document.querySelector(".input")

const bodyPage = document.querySelector("body")
console.log(inputSwitch.checked);

const decryptDark = document.querySelector("#desencriptar")

const section2Page = document.querySelector(".section2")

const h2Page1 = document.querySelector(".title1")

const h2Page2 = document.querySelector(".title2")


inputSwitch.checked = JSON.parse(localStorage.getItem("mode"));

updateMode();

function updateMode() {
      if (inputSwitch.checked) {
            bodyPage.style.background = "black";
            decryptDark.style.background = "#495057";
            decryptDark.style.color = "#EFF1FA";
            section2Page.style.background = "#343A40";
            h2Page1.style.color = "white";
            section2Page.style.color = "#AAB2D5";
            h2Page2.style.color = "#AAB2D5";
      }
      else {
            bodyPage.style.background = "#EFF1FA";
            decryptDark.style.background = "#E9ECF8";
            decryptDark.style.color = "#0A3871";
            section2Page.style.background = "white";
            h2Page1.style.color = "#343A40";
            section2Page.style.color = "#495057";
            h2Page2.style.color = "#343A40";
      }
}

inputSwitch.addEventListener("input", ()=>{
      updateMode();
      updatePreference();
})


function updatePreference(){
      localStorage.setItem("mode", JSON.stringify(inputSwitch.checked));
}