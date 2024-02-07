let plantslistHTML = document.querySelector(".plantslist");
let soilslistHTML = document.querySelector(".soilslist");
let accessoriesslistHTML = document.querySelector(".accessoriesslist");
let body = document.querySelector("body");
let plantslist = [];
let soilslist = [];
let accessoriesslist = [];

const displayAllPlants = () => {
  plantslistHTML.innerHTML = "";
  if (plantslist.length > 0) {
    //if plantlist has data then it checks each plant
    plantslist.forEach((plant) => {
      let newplant = document.createElement("div");
      newplant.dataset.id = plant.id;
      newplant.classList.add("item");
      newplant.innerHTML = `<img class="cardimage" src="${plant.image}">
      <div class="cardtitlediv">
                <p class="cardtitle">${plant.name}</p>
                <div class="price">$${plant.price}</div>
                
                </div><div class="btndiv">  <div class="addcrtbtn"><a>Add to cart</a></div><div class="favdiv"><i class="material-icons"><span class="material-symbols-outlined">
favorite
</span>
</i>
</span></div>`;
      plantslistHTML.appendChild(newplant);
    });
  }
};

const initApp = () => {
  fetch("plants.json")
    .then((response) => response.json())
    .then((data) => {
      plantslist = data;
      console.log(plantslist);
      displayAllPlants();
    });
};

initApp();

const addSoilsToHTML = () => {
  soilslistHTML.innerHTML = "";
  if (soilslist.length > 0) {
    soilslist.forEach((soil) => {
      let newSoil = document.createElement("div");
      newSoil.dataset.id = soil.id;
      newSoil.classList.add("item");
      newSoil.innerHTML = `<img class="cardimage" src="${soil.image}">
      <div class="cardtitlediv">
                <p class="cardtitle">${soil.name}</p>
                <div class="price">$${soil.price}</div>
                
                </div><div class="btndiv"> <div class="addcrtbtn"><a>Add to cart</a></div><div class="favdiv"><i class="material-icons"><span class="material-symbols-outlined">
favorite
</span>
</i>
</span></div></div>`;
      soilslistHTML.appendChild(newSoil);
    });
  }
};

const initSoils = () => {
  // Fetch soil data
  fetch("soil.json")
    .then((response) => response.json())
    .then((data) => {
      soilslist = data;
      console.log(soilslist);
      addSoilsToHTML();
    });
};

// Call the initSoils function to initialize the soil data
initSoils();

const addAccessoriesToHTML = () => {
  accessoriesslistHTML.innerHTML = "";
  if (accessoriesslist.length > 0) {
    accessoriesslist.forEach((accessory) => {
      let newAccessory = document.createElement("div");
      newAccessory.dataset.id = accessory.id;
      newAccessory.classList.add("item");
      newAccessory.innerHTML = `<img class="cardimage" src="${accessory.image}">
      <div class="cardtitlediv">
                <p class="cardtitle">${accessory.name}</p>
                <div class="price">$${accessory.price}</div>
              
                </div><div class="btndiv">   <div class="addcrtbtn"><a>Add to cart</a></div><div class="favdiv"><i class="material-icons"><span class="material-symbols-outlined">
favorite
</span>
</i>
</span></div>`;
      accessoriesslistHTML.appendChild(newAccessory);
    });
  }
};

const initAccessories = () => {
  // Fetch accessory data
  fetch("accessories.json")
    .then((response) => response.json())
    .then((data) => {
      accessoriesslist = data;
      console.log(accessoriesslist);
      addAccessoriesToHTML();
    });
};

// Call the initAccessories function to initialize the accessory data
initAccessories();
