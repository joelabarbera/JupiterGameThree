'use strict'

const morningScenes = [
  {
    prompt: "🍳 Breakfast time! Pick your fuel:",
    choices: [
      { text: "Eat at home", cost: 5, happiness: 2 },
      { text: "Eat at a restaurant", cost: 15, happiness: 0 }
    ]
  },
  {
    prompt: "🚶 You're getting to work. How will you travel?",
    choices: [
      { text: "Take the train", cost: 2.90, happiness: 1 },
      { text: "Take an Uber", cost: 18, happiness: -1 }
    ]
  },
  
  {
    prompt: "🌞 You wake up and need your caffeine fix. What do you do?",
    choices: [
      { text: "Go to Starbucks drive-thru", cost: 6, happiness: 3 },
      { text: "Make coffee at home", cost: 1, happiness: 2 }
    ]
  },
  {
    prompt: "😴 You’re still sleepy. What do you do?",
    choices: [
      { text: "Sleep in and skip your routine", cost: 0, happiness: -2 },
      { text: "Take a morning walk in the park", cost: 0, happiness: 2 }
    ]
  },
  {
    prompt: "🍩 Sweet tooth strikes! What do you grab?",
    choices: [
      { text: "Buy donut and juice", cost: 4, happiness: 1 },
      { text: "Refill MetroCard instead", cost: 33, happiness: 1 }
    ]
  }
    
];

const middayScenes = [
  {
    prompt: "🥗 Lunch break! What's the move?",
    choices: [
      { text: "Eat lunch out with a friend", cost: 12, happiness: 3 },
      { text: "Skip lunch to save money", cost: 0, happiness: -2 }
    ]
  },
  {
    prompt: "🧼 Time to handle responsibilities. What do you pay for?",
    choices: [
      { text: "Pay your phone bill", cost: 25, happiness: 0 },
      { text: "Put $20 in emergency fund", cost: 20, happiness: 0 }
    ]
  },
  {
    prompt: "📦 You're running low on supplies. What do you do?",
    choices: [
      { text: "Buy groceries", cost: 40, happiness: 2 },
      { text: "Order delivery instead", cost: 20, happiness: 3 }
    ]
  },
  {
    prompt: "🐾 Got some free time. How do you spend it?",
    choices: [
      { text: "Volunteer at animal shelter", cost: 0, happiness: 4 },
      { text: "Go shopping at the mall", cost: 30, happiness: 2 }
    ]
  },
  {
    prompt: "🎮 Online deal alert! What's your call?",
    choices: [
      { text: "Buy a video game skin", cost: 10, happiness: 1 },
      { text: "Save $50 for future goal", cost: 50, happiness: 1 }
    ]
  },
  {
    prompt: "📚 Feeling curious. Choose an activity:",
    choices: [
      { text: "Visit the library", cost: 0, happiness: 2 },
      { text: "Scroll your phone aimlessly", cost: 0, happiness: -1 }
    ]
  },
  {
    prompt: "😷 Uh-oh! A minor emergency.",
    choices: [
      { text: "Buy cold medicine", cost: 12, happiness: -1 },
      { text: "Ignore it and push through", cost: 0, happiness: -2 }
    ]
  },
  {
    prompt: "🔌 Your phone's on 1%. What now?",
    choices: [
      { text: "Buy a new charger", cost: 15, happiness: -1 },
      { text: "Borrow a friend’s charger", cost: 0, happiness: 0 }
    ]
  },
  {
    prompt: "🐶 Oh no, your pet is sick!",
    choices: [
      { text: "Pay $50 for vet care", cost: 50, happiness: -3 },
      { text: "Hope it recovers naturally", cost: 0, happiness: -5 }
    ]
  }
];

const nightScenes = [
  {
    prompt: "🎬 Your friends invite you out. What's the plan?",
    choices: [
      { text: "Go to the movies", cost: 15, happiness: 4 },
      { text: "Skip and stay home", cost: 0, happiness: -1 }
    ]
  },
  {
    prompt: "🎡 Feeling bored. What sounds more fun?",
    choices: [
      { text: "Go to the arcade", cost: 12, happiness: 3 },
      { text: "Play video games at home", cost: 0, happiness: 2 }
    ]
  },
  {
    prompt: "⚾ You've been dying to go to a game...",
    choices: [
      { text: "Buy Yankees tickets", cost: 35, happiness: 5 },
      { text: "Save the money and watch at home", cost: 0, happiness: 1 }
    ]
  },
  {
    prompt: "🍕 It's dinner time. What do you eat?",
    choices: [
      { text: "Order pizza", cost: 18, happiness: 3 },
      { text: "Cook dinner at home", cost: 5, happiness: 1 }
    ]
  },
  {
    prompt: "🧘‍♀️ It's been a long day. Unwind how?",
    choices: [
      { text: "Take a bubble bath", cost: 0, happiness: 3 },
      { text: "Stay up too late on your phone", cost: 0, happiness: -2 }
    ]
  },
  {
    prompt: "🎲 Quiet night options:",
    choices: [
      { text: "Play board games", cost: 0, happiness: 2 },
      { text: "Buy takeout dessert", cost: 7, happiness: 2 }
    ]
  }
];



function goToInstructionPage(){

  const welcomePageTag = document.getElementById("welcome-page");
  welcomePageTag.classList.add("hide");

  const instructionPageTag = document.getElementById("instruction-page");
  instructionPageTag.classList.remove("hide");
}

// Main menu start bttn logic
function goToMainPage(){
  const instructionPageTag = document.getElementById("instruction-page");
  instructionPageTag.classList.add("hide");

  const mainPageTag = document.getElementById("main-page");
  mainPageTag.classList.remove("hide");
  
  game()
  console.log("test")

}


let i = 0;

let rArrow = document.getElementById('right-arrow');
rArrow.addEventListener("click", function () {
  i++;
  console.log(i);
  game(); 
}); 

let lArrow = document.getElementById('left-arrow');
lArrow.addEventListener("click", function () {
  i--;
  console.log(i);
  game(); 
}); 

let budget = 600;

function game(){
  document.getElementById("budget").innerText = "Budget: $" + budget;
  if (i <= 5){
    // --- Morning ---
    const morningPrompt = document.getElementById("morning");
    const mornBtn1 = document.getElementById("morn-choice1");
    const mornBtn2 = document.getElementById("morn-choice2");

    morningPrompt.textContent = morningScenes[i].prompt;
    mornBtn1.textContent = morningScenes[i].choices[0].text + ": $" + morningScenes[i].choices[0].cost;
    mornBtn2.textContent = morningScenes[i].choices[1].text + ": $" + morningScenes[i].choices[1].cost;

    mornBtn1.addEventListener("click", function () {
      mornBtn1.textContent = "Happiness: " + morningScenes[i].choices[0].happiness;
      budget = budget - morningScenes[i].choices[0].cost;
      document.getElementById("budget").innerText = "Budget: $" + budget;
    });

    mornBtn2.addEventListener("click", function () {
      mornBtn2.textContent = "Happiness: " + morningScenes[i].choices[1].happiness;
      budget = budget - morningScenes[i].choices[1].cost;
      document.getElementById("budget").innerText = "Budget: $" + budget;
    });

    // --- Midday ---
    const middayPrompt = document.getElementById("Midday");
    const midBtn1 = document.getElementById("mid-choice1");
    const midBtn2 = document.getElementById("mid-choice2");

    middayPrompt.textContent = middayScenes[i].prompt;
    midBtn1.textContent = middayScenes[i].choices[0].text + ": $" + middayScenes[i].choices[0].cost;
    midBtn2.textContent = middayScenes[i].choices[1].text + ": $" + middayScenes[i].choices[1].cost;

    midBtn1.addEventListener("click", function () {
      midBtn1.textContent = "Happiness: " + middayScenes[i].choices[0].happiness;
      budget = budget - middayScenes[i].choices[0].cost;
      document.getElementById("budget").innerText = "Budget: $" + budget;
    });

    midBtn2.addEventListener("click", function () {
      midBtn2.textContent = "Happiness: " + middayScenes[i].choices[1].happiness;
      budget = budget - middayScenes[i].choices[1].cost;
      document.getElementById("budget").innerText = "Budget: $" + budget;
    });

    // --- Night ---
    const nightPrompt = document.getElementById("night");
    const nightBtn1 = document.getElementById("night-choice1");
    const nightBtn2 = document.getElementById("night-choice2");

    nightPrompt.textContent = nightScenes[i].prompt;
    nightBtn1.textContent = nightScenes[i].choices[0].text + ": $" + nightScenes[i].choices[0].cost;
    nightBtn2.textContent = nightScenes[i].choices[1].text + ": $" + nightScenes[i].choices[1].cost;

    nightBtn1.addEventListener("click", function () {
      nightBtn1.textContent = "Happiness: " + nightScenes[i].choices[0].happiness;
      budget = budget - nightScenes[i].choices[0].cost;
      document.getElementById("budget").innerText = "Budget: $" + budget;
    });

    nightBtn2.addEventListener("click", function () {
      nightBtn2.textContent = "Happiness: " + nightScenes[i].choices[1].happiness;
      budget = budget - nightScenes[i].choices[1].cost;
      document.getElementById("budget").innerText = "Budget: $" + budget;
    });
  }else{
    console.log("done");
  }
}




function openModal(problemID){
    const modal = document.getElementById("modal");

    const modalTitleTag = document.getElementById("modal-title");
    const modalIconTag = document.getElementById("modal-icon");
    const descriptionTag = document.getElementById("modal-description");

    

    
}

function closeModal(){
    const modal = document.getElementById("modal");
    
    modal.style.display = 'none';

    // The function below is called to determine if the user has found all the problems
    gameComplete();
}


