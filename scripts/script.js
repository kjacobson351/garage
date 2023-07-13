const button = document.querySelector("btn")


const main = document.querySelector(".main");



function makeDiv(){
    const newCard = document.createElement("div");
    newCard.setAttribute("class","card")
    newCard.textContent = "appended";
    main.appendChild(newCard)

    console.log("test")
}








/*
let vehicles =[];

function Vehicle (year, make, model, type, engineSize ){
    this.year = year;
    this.make = make;
    this.model = model;
    this.type = type;
    this.engineSize = engineSize;
}

vehicles.push(new Vehicle (2015,"Yamaha","WR250R", "Motorcycle", "250cc"))

vehicles.push(new Vehicle (1961, "Ford", "Econoline", "Van", "3300cc"));

console.log(vehicles)
*/
