const servingsForm = document.getElementById("servings-form");
servingsForm.addEventListener("submit", calculatePortions);

const basePortions = 4;

function calculatePortions(event) {
    event.preventDefault();
    let portions = document.getElementById("servings-input").value;
    let ingredients = document.querySelectorAll(".ingredients li");

    let factor = portions / basePortions;

    ingredients.forEach((ingredient) => {
        let baseAmount = ingredient.getAttribute("data-amount");

        if (baseAmount) {
            let text = ingredient.innerText.replace(/[0-9/½]/g, "").trim();

            let newAmount = baseAmount * factor;
            let displayAmount;

            if (newAmount < 0.5) {
                displayAmount = "½";
            } else {
                displayAmount = Math.round(newAmount);
            }
            ingredient.innerText = displayAmount + " " + text;
        }
    });
}

































// const recipe =
// {
//     title: "Szegediner Gulasch",

//     servings: 4,
//     ingredients:
//     [
//         { amount: 500, unit: "g", name: "Schweinegulasch" },
//         { amount: 500, unit: "g.", name: "Sauerkraut"},
//         { amount: 2, unit: "Stk.", name: "Zwiebel(n)" },
//         { amount: 2, unit: "Stk.", name: "Knoblauchzehe(n)" },
//         { amount: 100, unit: "g", name: "Tomatenmark" },
//         { amount: 100, unit: "ml", name: "Weißwein"},
//         { amount: 500, unit: "ml", name: "Brühe (Gemüse, o.ä.)"},
//         { amount: 50, unit: "ml", name: "Öl"},
//         { amount: 50, unit: "g", name: "Butter"},
//         { amount: 50, unit: "g", name: "Mehl"},
//     ]

// }


// const servingsForm = document.getElementById("servings-form");

// const amountList = document.getElementsByClassName("amount");

// servingsForm.addEventListener("submit", calculateServings);




// function calculateServings(event)
// {
//     event.preventDefault();
//     let newServings = document.getElementById("servings-input").value;
//     let factor = newServings / recipe.servings;

//     for (let i = 0; i < amountList.length; i++)
//     {
//         let baseAmounts = recipe.ingredients[i].amount;
//         let newAmount = baseAmounts * factor;

//         amountList[i].innerText = newAmount;
//     }
// }




// // Get the table by ID
// const table = document.getElementById("myTable");

// // Add a new row
// const newRow = table.insertRow();

// // First cell
// const cell1 = newRow.insertCell();
// cell1.textContent = "John Doe";

// // Second cell
// const cell2 = newRow.insertCell();
// cell2.textContent = "25";

// function addTableRow(name, age) {
//   // Get the table by ID
//   const table = document.getElementById("myTable");
//   // Add a new row
//   const newRow = table.insertRow();

//   // Insert cells with specified data
//   const cell1 = newRow.insertCell();
//   cell1.textContent = name;
//   const cell2 = newRow.insertCell();
//   cell2.textContent = age;
// }