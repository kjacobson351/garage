let vehicleArray =[]
let arrayIndex = -1;

const button = document.querySelector("btn")

const main = document.querySelector(".main");

const form = document.querySelector("form");

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
    const arrIndex = document.createElement("div");//
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
    /*yearMake.appendChild(arrIndex);//*/
    cardWrapper.appendChild(type);
    cardWrapper.appendChild(engineSize);
    cardWrapper.appendChild(cardButtonDiv);
    cardButtonDiv.appendChild(selectBtn);
    cardButtonDiv.appendChild(deleteBtn);
    main.appendChild(cardWrapper)
    //assigning object values to card  
    const last = vehicleArray[vehicleArray.length - 1];
   yearMake.innerText =`${last.year} ${last.make} ${last.model}`;
   arrayIndex++;
   arrIndex.innerText = arrayIndex;
   yearMake.appendChild(arrIndex);//
   type.innerText = last.type;
   engineSize.innerText = last.engine;
}

function deleteCard(button) {
   const card = button.parentNode.parentNode;
    card.parentNode.removeChild(card);
}











