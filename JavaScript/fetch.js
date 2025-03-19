// addEvent
// let detailsButtons = document.querySelectorAll(".detailsButton");
// detailsButtons.forEach( detailsButton => {
//   detailsButton.addEventListener("click", function(event) {
//       event.preventDefault(event); 
//         console.log(document);
//         alert("Guwa mara kha")        

//     })
// })

// Fetching data from API for All Levels (Buttons)
const loadButtonData = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => {
      displayButtonData(data.data);
    });
};
loadButtonData();

const displayButtonData = (buttons) => {
  const buttonContainer = document.getElementById("button-container");
  for (const button of buttons) {
    const a = document.createElement("a");
    a.innerHTML = `
    <a class="btn magicBtn bg-btn-clr drop-shadow-md border-4 border-[#8d99ae] ml-5">
        lesson - ${button.level_no}
      </a>
    `;
    buttonContainer.appendChild(a);
  }
};

// Fetching data from API for Words by Levels (Cards)
const loadCardData = () => {
  fetch("https://openapi.programming-hero.com/api/level/5")
    .then((res) => res.json())
    .then((data) => {
      displayCardData(data.data);
    });
};

const displayCardData = (cards) => {
    cardsStartup.innerHTML = `
                <div id="cards-container" class="bg-btn-clr grid grid-cols-3 rounded-2xl drop-shadow-2xl gap-4 p-4">
                </div>
    `;
    const startUpCard = document.getElementById("startup-card");
    startUpCard.innerHTML= "";
  const cardsContainer = document.getElementById("cards-container");
  for (const card of cards) {
    // console.log(card);
    const div = document.createElement("div");
    div.innerHTML = `
            <div class="bg-[#FFFFFF] p-18 rounded-xl">
                <h3 class="text-medium text-4xl drop-shadow-sm mb-6">${card.word}</h3>
                <p class="text-xl text-normal  drop-shadow-sm mb-6">${card.pronunciation}</p>
                <h3 class="font-hind text-medium text-4xl drop-shadow-sm mb-12 truncate">${card.meaning}</h3>
            <div class="flex justify-between items-center">
                <a class="detailsButton btn bg-btn-clr w-auto h-auto drop-shadow-m border-none px-0"><img src="assets/Group 10.png" alt="Group"></a>
                <a class="btn bg-btn-clr w-auto h-auto drop-shadow-md border-none px-0"><img src="assets/Group 9.png" alt="Group"></a>
            </div>
            </div>            
        `;
    cardsContainer.appendChild(div);
  }
};

// ---
const cardsStartup = document.getElementById("cards-startup");
cardsStartup.innerHTML = "" ;
// ---

// Fetching data from API for Details
const loadDetailsData = () => {
  fetch("https://openapi.programming-hero.com/api/word/5")
    .then((res) => res.json())
    .then((data) => console.log(data));
};
loadDetailsData();

// Fetching data from API for All Words
const loadAllWorldData = () => {
  fetch("https://openapi.programming-hero.com/api/words/all")
    .then((res) => res.json())
    .then((data) => console.log(data));
};




const faltuButton = () => {
  console.log(loadCardData());  
  console.log(displayCardData()) ; 
} 