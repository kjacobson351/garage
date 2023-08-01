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
  renderAddNew();
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
  let quarterMile = document.querySelector("#quarter-mile").value;
  let newVehicle = new Vehicle (year, make, model, type, color, quarterMile);
  vehicleArray.push(newVehicle);
  
}



class Vehicle {
  constructor(year, make, model, type, color, quarterMile) {
    this.year = year;
    this.model = model;
    this.type = type;
    this.color = color;
    this.quarterMile = quarterMile;
  }
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
    cardWrapper.appendChild(cardButtonDiv);
    cardButtonDiv.appendChild(selectBtn);
    cardButtonDiv.appendChild(deleteBtn);
    main.appendChild(cardWrapper)
    
    //sets the html from each card using the current info from the current object of the iteration
    const current = vehicleArray[i];
    yearMake.innerText =`${current.year} ${current.make} ${current.model}`;
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
    iconDiv.style.color = current.color; 
  }
}

//adds UI to let you add more vehicles
function renderAddNew(){
  const cardWrapper = document.createElement("div");
    cardWrapper.setAttribute("class","card-wrapper");
    const yearMake = document.createElement("div");
    yearMake.setAttribute("class","year-make");
    const iconDiv = document.createElement("div");
    iconDiv.setAttribute("class","icon");
    iconDiv.innerHTML = `<i class="fa-solid fa-question"></i>`;
    const cardButtonDiv = document.createElement("div");
    cardButtonDiv.setAttribute("class","card-buttons");
    const selectBtn = document.createElement("button");
    selectBtn.setAttribute("class", "add-new");
    //selectBtn.setAttribute("id", i);//sets id so that index can be called later.
    selectBtn.setAttribute("onClick", "showForm()");
    selectBtn.innerHTML=`<i class="fa-solid fa-plus"></i>`;
    //appending 
    cardWrapper.appendChild(yearMake);
    cardWrapper.appendChild(cardButtonDiv);
    cardButtonDiv.appendChild(selectBtn);
    main.appendChild(cardWrapper)
    yearMake.innerText = "Add new Vehicle?";
    yearMake.append(iconDiv);
    iconDiv.innertext = `<i class="fa-solid fa-plus"></i>`;
}

//will remove all cards from the screen. currently calling this function will remove any way to add new cards
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
   renderAddNew()
}

function showForm() {
formWrapper.style.display ="flex";
}

function hideForm(){
  formWrapper.style.display="none";
}


//adds the selected vehicles icon to the bottom of the screen and sets the transition time to equal the vehcicles ET.
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
//If racer1 is already selected racer 2 will be the next one selcted
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
//default vehicles that will load on refresh

let dummyCard = new Vehicle(1961, "Ford", "Econoline", "Van", `#e22828`, 20 )

let dummyCard2 = new Vehicle(2015, "Yamaha", "WR250RR", "Motorcycle", `#271ae0`, 15.49 )

let dummyCard3 = new Vehicle(2023, "Kawasaki", "H2R", "Motorcycle", `#69BE28`, 9.64 )

let dummyCard4 = new Vehicle (2016, "KTM", "Duke 690", "Motorcycle", `#FF6600`, 11.97)


vehicleArray.push(dummyCard);
vehicleArray.push(dummyCard2);
vehicleArray.push(dummyCard3);
vehicleArray.push(dummyCard4);
render()
renderAddNew();

function race(){
  const screenWidth = window.innerWidth;
  racer1Icon = document.getElementById("racer1Icon");
  racer2Icon = document.getElementById("racer2Icon");
  racer1Icon.style.transform = `translateX(${screenWidth}px)`;
  racer2Icon.style.transform = `translateX(${screenWidth}px)`;
  if (racer1.speed < racer2.speed){//resets racers after the slowest racer finishes.
    setTimeout(function(){
    player1 = "unselected";
    player2 = "unselected"
    },`${racer1.speed}`);
  } else {
    setTimeout(function(){
      racer1 = "unselected";
      racer2 = "unselected"
      },`${racer2.speed}`);
  }
 
}

