let vehicleArray =[];

const main = document.querySelector(".main");

const formWrapper = document.querySelector(".form-wrapper")

const form = document.querySelector("form");

const newVehicleButton = document.getElementById("newVehicleBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addCarToGarage();
  render();
  form.reset();
  formWrapper.style.display = "none";
})


//gets called on form submit. Gets info from each line of the form and plugs them into the Vehicle constructor. Then pushes that vehicle to an array.
function addCarToGarage(){
  let year = document.querySelector("#year").value;
  let make = document.querySelector("#make").value;
  let model = document.querySelector("#model").value;
  let type = document.querySelector("#type").value;
  let color = document.querySelector("#color").value;
  let engineSize = document.querySelector("#engine").value;
  let quarterMile = document.querySelector("#quarter-mile").value;
  let newVehicle = new Vehicle (year, make, model, type, color, engineSize, quarterMile);
  vehicleArray.push(newVehicle);
  
}

function Vehicle (year, make, model, type, color, engineSize, quarterMile) {
  this.year = year;
  this.make = make;
  this.model = model;
  this.type = type;
  this.color = color;
  this.engineSize = engineSize;
  this.quarterMile = quarterMile;
}

//erases all cards from screen then makes a new card for every vehicle in the vehicles array
function render(){
  deleteAllCards();//to start fresh each time
  for (let i = 0; i < vehicleArray.length; i++){
    const cardWrapper = document.createElement("div");
    cardWrapper.setAttribute("class","card-wrapper");
    const yearMake = document.createElement("div");
    yearMake.setAttribute("class","year-make");
    const iconDiv = document.createElement("div");
    iconDiv.setAttribute("class","icon");
    const type = document.createElement("div");
    type.setAttribute("class","card-other");
    type.setAttribute("id","type");
    const engineSize = document.createElement("div");
    engineSize.setAttribute("class","card-other");
    engineSize.setAttribute("id","engine-size");
    const quarterMile = document.createElement("div");
    quarterMile.setAttribute("class","card-other");
    quarterMile.setAttribute("id","quarter-mile");
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
    cardWrapper.appendChild(quarterMile);
    cardWrapper.appendChild(cardButtonDiv);
    cardButtonDiv.appendChild(selectBtn);
    cardButtonDiv.appendChild(deleteBtn);
    main.appendChild(cardWrapper)
    
    //sets the html from each card using the current info from the current object of the iteration
    const current = vehicleArray[i];
    yearMake.innerText =`${current.year} ${current.make} ${current.model}`;
    type.innerText = current.type;
    yearMake.appendChild(iconDiv);//MOVED THIS LINE DOWN
    switch (current.type) {
      case "Car":
        iconDiv.innerHTML = `<i class="fa-solid fa-car-side"></i>`;
        break;
        case "Truck":
        iconDiv.innerHTML = `<i class="fa-solid fa-truck-pickup"></i>`;
        break;
      case "Van":
        iconDiv.innerHTML = `<i class="fa-solid fa-van-shuttle"></i>`;
        break;
        case "Motorcycle":
        iconDiv.innerHTML = `<i class="fa-solid fa-motorcycle"></i>`;
        break;
    }
    
    /*if (current.type === "Van"){//turn this into switch statment
      iconDiv.innerHTML = `<i class="fa-solid fa-van-shuttle"></i>`;
    }*/
    iconDiv.style.color = current.color;
    engineSize.innerText = current.engineSize;
    quarterMile.innerText = `1/4 mile: ${current.quarterMile} seconds`;
    //iconDiv.innerText="test";
   
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

function showForm() {
formWrapper.style.display ="flex";
}

function clearForm (){

};