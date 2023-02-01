const inputSwitch = document.querySelector(".input")

const bodyPage = document.querySelector("body")
console.log(inputSwitch.checked);



inputSwitch.checked = JSON.parse(localStorage.getItem("mode"));

updateMode();

function updateMode() {
      if (inputSwitch.checked) {
            bodyPage.style.background = "black"
      }
      else {
            bodyPage.style.background = "#EFF1FA"
      }
}

inputSwitch.addEventListener("input", ()=>{
      updateMode();
      updatePreference();
})


function updatePreference(){
      localStorage.setItem("mode", JSON.stringify(inputSwitch.checked));
}