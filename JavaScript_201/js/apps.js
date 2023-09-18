// while(true) {
//     let number = prompt("Guess the number")
//         number = Number(number);
//     const randomNumber = math.ceil(Math.rnadom() * 10);

// if(number === randomNumber) {
//     alert("YOU WIN");
//     break;
// } else {
//     console.log("You guessed", number, "But the right number was", randomNumber);
// }
// }
"use strict"
// copyright update
const date =  new Date()
const copyRight = document.getElementById("footerDate");
copyRight.innerText = `${date.getFullYear()}`

// TARGET CARD DETAILS
const NAME = document.getElementById("name");
const HEIGHT = document.getElementById("height");
const WEIGHT = document.getElementById("weight");
const PLANET = document.getElementById("planet");
const IMAGE = document.querySelector(".imgContainer")


// LISTEN FOR BUTTON CLICK
const btn = document.getElementById("btn")

btn.addEventListener('click', e => {
    // GET API USING USER SELECTION
    fetch(`https://akabab.github.io/starwars-api/api/all.json`)
    .then(response => response.json() ) // take the API response and return response as json
    .then(data => {
            let num = Math.floor(Math.random() * 84)
            let characterInfo = data[num]
            // change each of the details based on their key in the json
            NAME.innerText=`${characterInfo["name"]}`;
            HEIGHT.innerText=`${characterInfo["height"]} cm`;
            WEIGHT.innerText=`${characterInfo["mass"]} KG`;
            PLANET.innerText= `${characterInfo["homeworld"]}`;
            IMAGE.style.backgroundImage = `url("${characterInfo["image"]}")`;
    }); 
});


