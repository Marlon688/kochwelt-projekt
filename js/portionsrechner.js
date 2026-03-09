let basePortions = 4;
function calculatePortions() {

let portions = document.getElementById("portionInput").value;

if (portions < 1) {
    portions = 1;
    document.getElementById("portionInput").value = 1;
    alert("Bitte mindestens 1 Portion eingeben");
    return
}
let factor = portions / basePortions;

let ingredients = document.querySelectorAll(".ingredients li");

ingredients.forEach((ingredient) => {

    let baseAmount = ingredient.getAttribute("data-amount");

    if(baseAmount){
    
    let text = ingredient.innerText.replace(/[0-9]/g,"").trim();

    let newAmount = Math.round(baseAmount * factor);

    ingredient.innerText = newAmount + " " + text;

    }

    });



}