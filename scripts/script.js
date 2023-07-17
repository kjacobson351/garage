let vehicleArray =[]
let uniqueId

const button = document.querySelector("btn")

const main = document.querySelector(".main");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addCarToGarage();
})


//gets called on form submit. Gets info from each line of the form and plugs them into the Vehicle constructor. Then pushes that vehicle to an array. Then renders that array into html
function addCarToGarage(){
  let year = document.querySelector("#year").value;
  let make = document.querySelector("#make").value;
  let model = document.querySelector("#model").value;
  let type = document.querySelector("#type").value;
  let engineSize = document.querySelector("#engine").value;
  let newVehicle = new Vehicle (year, make, model, type, engineSize);
  vehicleArray.push(newVehicle)
  render();
}

function Vehicle (year, make, model, type, engineSize) {
  this.year = year;
  this.make = make;
  this.model = model;
  this.type = type;
  this.engineSize = engineSize;
}

//erases all cards from screen then makes a new card for every vehicle in the vehicles array
function render(){
  deleteAllCards();//to start fresh each time
  for (let i = 0; i < vehicleArray.length; i++){
    const cardWrapper = document.createElement("div");
    cardWrapper.setAttribute("class","card-wrapper");
    const yearMake = document.createElement("div");
    yearMake.setAttribute("class","year-make");
    const type = document.createElement("div");
    type.setAttribute("class","card-other");
    type.setAttribute("id","type");
    const engineSize = document.createElement("div");
    engineSize.setAttribute("class","card-other");
    engineSize.setAttribute("id","engine-size");
    const cardButtonDiv = document.createElement("div");
    cardButtonDiv.setAttribute("class","card-buttons");
    const selectBtn = document.createElement("button");
    selectBtn.setAttribute("class", "select-button");
    selectBtn.setAttribute("id", i);//sets id so that index can be called later.
    selectBtn.innerText="Select";
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-button");
    deleteBtn.setAttribute("id", i);//sets id so that index can be called later.
    deleteBtn.setAttribute("onClick", "deleteCard(this)")
    deleteBtn.innerText="Delete";
    //appending
    cardWrapper.appendChild(yearMake);
    cardWrapper.appendChild(type);
    cardWrapper.appendChild(engineSize);
    cardWrapper.appendChild(cardButtonDiv);
    cardButtonDiv.appendChild(selectBtn);
    cardButtonDiv.appendChild(deleteBtn);
    main.appendChild(cardWrapper)
    //sets the html from each card using the current info from the current object of the iteration
    const current = vehicleArray[i];
    yearMake.innerText =`${current.year} ${current.make} ${current.model}`;
    type.innerText = current.type;
    engineSize.innerText = current.engineSize;
   
  }
}


function deleteAllCards(){
  const cards = document.querySelectorAll(".card-wrapper");
  cards.forEach(card => {
    card.remove();
  })
}


//gets the index of the targeted card from the button id and erases that index and re-renders with "index-ids" being reset.
function deleteCard(button) {
  const card = button.parentNode.parentNode;
   card.parentNode.removeChild(card);
   const index = button.id;
   vehicleArray.splice(index,1);
   render()
}

/*
const vehicle1 = new Vehicle (1961, "Ford", "Econoline", "van", "3300cc")
console.log(vehicle1)


form.addEventListener("submit", (e) => {
    e.preventDefault();//stops form from submitting itself.
  const fd = new FormData(form);//creates a new instance of the FormData object
  const vehicleObj = Object.fromEntries(fd);
  console.log(vehicleObj);
  vehicleArray.push(vehicleObj);
  makeCard();
})




//makes card structure in the dom adds the values of the just generated object to the proper divs
function makeCard(){
    //dom div construction
    const cardWrapper = document.createElement("div");
    cardWrapper.setAttribute("class","card-wrapper");
    const yearMake = document.createElement("div");
    yearMake.setAttribute("class","year-make");
    const type = document.createElement("div");
    type.setAttribute("class","card-other");
    type.setAttribute("id","type");
    const engineSize = document.createElement("div");
    engineSize.setAttribute("class","card-other");
    engineSize.setAttribute("id","engine-size");
    const cardButtonDiv = document.createElement("div");
    cardButtonDiv.setAttribute("class","card-buttons");
    const selectBtn = document.createElement("button");
    selectBtn.setAttribute("id","card-select");
    selectBtn.innerText="Select";
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id","card-delete");
    deleteBtn.setAttribute("onClick", "deleteCard(this)")
    deleteBtn.innerText="Delete";
    //appending
    cardWrapper.appendChild(yearMake);
    cardWrapper.appendChild(type);
    cardWrapper.appendChild(engineSize);
    cardWrapper.appendChild(cardButtonDiv);
    cardButtonDiv.appendChild(selectBtn);
    cardButtonDiv.appendChild(deleteBtn);
    main.appendChild(cardWrapper)
    //assigning object values to card  
    const last = vehicleArray[vehicleArray.length - 1];
   yearMake.innerText =`${last.year} ${last.make} ${last.model}`;
   type.innerText = last.type;
   engineSize.innerText = last.engine;
}

function deleteCard(button) {
   const card = button.parentNode.parentNode;
    card.parentNode.removeChild(card);
}

let array = [1,2,3];
array.pop(2);
console.log(array)

*/







