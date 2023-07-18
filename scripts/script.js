let vehicleArray =[];
let racer1 = "unselected";
let racer2 = "unselected";

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
    selectBtn.setAttribute("onClick", "racerSelect(this)");
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

function racerSelect(button) {
  let racer1Icon;
  const racer1Track = document.getElementById("racer1Track");
  const racer2Track = document.getElementById("racer2Track");
  let index = button.id
  if (racer1 === "unselected") {
   racer1 = vehicleArray[index];
   switch (racer1.type) {
    case "Car":
      racer1Track.innerHTML = `<i class="fa-solid fa-car-side" id="racer1Icon"></i>`;
      racer1Icon = document.getElementById("racer1Icon");
      racer1Icon.style.transition = `${racer1.quarterMile * 1000}ms ease-in`;
      break;
      case "Truck":
      racer1Track.innerHTML = `<i class="fa-solid fa-truck-pickup" id=racer1Icon></i>`;
      racer1Icon = document.getElementById("racer1Icon");
      racer1Icon.style.transition = `${racer1.quarterMile * 1000}ms ease-in`;
      break;
    case "Van":
      racer1Track.innerHTML = `<i class="fa-solid fa-van-shuttle" id="racer1Icon"></i>`;
      racer1Icon = document.getElementById("racer1Icon");
      racer1Icon.style.transition = `${racer1.quarterMile * 1000}ms ease-in`;
      break;
      case "Motorcycle":
      racer1Track.innerHTML = `<i class="fa-solid fa-motorcycle" id="racer1Icon"></i>`;
      racer1Icon = document.getElementById("racer1Icon");
      racer1Icon.style.transition = `${racer1.quarterMile * 1000}ms ease-in`;
      break;}

      racer1Track.style.color=racer1.color;

   } else {
    racer2 = vehicleArray[index];
   switch (racer2.type) {
    case "Car":
      racer2Track.innerHTML = `<i class="fa-solid fa-car-side" id="racer2Icon"></i>`;
      racer2Icon = document.getElementById("racer1Icon");
      racer2Icon.style.transition = `${racer2.quarterMile * 1000}ms ease-in`;
      break;
      case "Truck":
      racer2Track.innerHTML = `<i class="fa-solid fa-truck-pickup" id=racer2Icon></i>`;
      racer2Icon = document.getElementById("racer2Icon");
      racer2Icon.style.transition = `${racer2.quarterMile * 1000}ms ease-in`;
      break;
    case "Van":
      racer2Track.innerHTML = `<i class="fa-solid fa-van-shuttle" id="racer2Icon"></i>`;
      racer2Icon = document.getElementById("racer2Icon");
      racer2Icon.style.transition = `${racer2.quarterMile * 1000}ms ease-in`;
      break;
      case "Motorcycle":
      racer2Track.innerHTML = `<i class="fa-solid fa-motorcycle" id="racer2Icon"></i>`;
      racer2Icon = document.getElementById("racer2Icon");
      racer2Icon.style.transition = `${racer2.quarterMile * 1000}ms ease-in`;
      break;}

      racer2Track.style.color=racer2.color;
   }
}

let dummyCard = new Vehicle(1961, "Ford", "Econoline", "Van", `#e22828`, "3300cc", 20 )

let dummyCard2 = new Vehicle(2015, "Yamaha", "WR250RR", "Motorcycle", `#271ae0`, "250cc", 15.49 )

let dummyCard3 = new Vehicle(2023, "Kawasaki", "H2R", "Motorcycle", `#69BE28`, "998cc", 9.64 )


vehicleArray.push(dummyCard);
vehicleArray.push(dummyCard2);
vehicleArray.push(dummyCard3);
render()

function race(){
  const screenWidth = window.innerWidth;
  racer1Icon = document.getElementById("racer1Icon");
  racer2Icon = document.getElementById("racer2Icon");
  racer1Icon.style.transform = `translateX(${screenWidth}px)`;
  racer2Icon.style.transform = `translateX(${screenWidth}px)`;
  setTimeout(function(){

  },18000);
}