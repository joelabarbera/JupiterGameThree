'use strict'

const morningScenes = [
  {
    prompt: "🍳 Breakfast time! Pick your fuel:",
    choices: [
      { text: "Eat at home", cost: 5, happiness: 2, iconPath: '/icons/cook-at-home.svg' },
      { text: "Eat out", cost: 15, happiness: 0, iconPath: '/icons/order-food.svg' }
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

function displayEnd(){
  let message = "";
  
  let game = document.getElementById("main-page");
  game.classList.add("hide");
  let endScreen = document.getElementById("end-screen");
  endScreen.classList.remove("hide");

  let finHappy = document.getElementById("final-happy");
  if (happy >= 40) {
    message = "🌟 Zen Master: You stayed happy and balanced all week!";
  } else if (happy >= 25) {
    message = "😊 Chill & Balanced: You handled things pretty well.";
  } else if (happy >= 10) {
    message = "😐 Mildly Stressed: Some bumps, but you made it through.";
  } else if (happy >= 0) {
    message = "😬 Tense but Survived: That was a close one!";
  } else {
    message = "😢 Overwhelmed & Burnt Out: Time to reset and take care of yourself.";
  }
  finHappy.innerText = message;
  document.getElementById("hScore").innerText = "Final Happiness: " + happy;
  
  let finBudget = document.getElementById("final-budget");
  if (budget >= 0){
    finBudget.innerText = "Congrats you did not go over budget! Final Total: $" + budget;
  }else{
    finBudget.innerText = "You failed. Budget: " +  budget.toFixed(2);
  }
}

function goToInstructionPage(){

  const welcomePageTag = document.getElementById("welcome-page");
  welcomePageTag.classList.add("hide");

  const instructionPageTag = document.getElementById("instruction-page");
  instructionPageTag.classList.remove("hide");
}

// Main menu start bttn logic
function goToMainPage(event){
  event.preventDefault();

  // Validate the inputs to make sure their sum is less than $700
  const rentAmount = parseInt(document.getElementById('rent-amount').value);
  const investAmount = parseInt(document.getElementById('invest-amount').value);
  const emergencyAmount = parseInt(document.getElementById('emergency-amount').value);

  /*
  
  if (rentAmount + investAmount + emergencyAmount > 700){
    alert("You have exceeded the budget. Please try again");
  }
  else if (isNaN(investAmount) || isNaN(emergencyAmount)){
    alert("You are missing an input. Put 0 if you don't want to put any money into it.")
  }
  else{
  */
    const instructionPageTag = document.getElementById("instruction-page");
    instructionPageTag.classList.add("hide");

    const mainPageTag = document.getElementById("main-page");
    mainPageTag.classList.remove("hide");
    
    game();
    console.log("test");
  //}

}


let i = 0;

let rArrow = document.getElementById('right-arrow');
rArrow.addEventListener("click", function () {
  if (i < 4){
    i++;
    console.log(i);
    game(); 
  }else{
    displayEnd();
  }
}); 

let lArrow = document.getElementById('left-arrow');
lArrow.addEventListener("click", function () {
  if (i < 5){
    i--;
    console.log(i);
    game(); 
  }
}); 

let budget = 600;
let happy = 0;

function game(){
  const budgetElement = document.getElementById("budget");

  budgetElement.innerText = "Budget: $" + budget;

  if (i <= 4){

    let day = document.getElementById("week-day");
    if (i === 0) {
      day.innerText = "Monday";
    } else if (i === 1) {
      day.innerText = "Tuesday";
    } else if (i === 2) {
      day.innerText = "Wednesday";
    } else if (i === 3) {
      day.innerText = "Thursday";
    } else if (i === 4) {
      day.innerText = "Friday";
    } else {
      day.innerText = "End of the week!";
    }

    //button variables
    const mornBtn1 = document.getElementById("morn-choice1");
    const mornBtn2 = document.getElementById("morn-choice2");
    const midBtn1 = document.getElementById("mid-choice1");
    const midBtn2 = document.getElementById("mid-choice2");
    const nightBtn1 = document.getElementById("night-choice1");
    const nightBtn2 = document.getElementById("night-choice2");

    // Re-enable buttons at the start of the scene
    mornBtn1.disabled = false;
    mornBtn2.disabled = false;
    midBtn1.disabled = false;
    midBtn2.disabled = false;
    nightBtn1.disabled = false;
    nightBtn2.disabled = false;

    // --- Morning ---
    const morningDecisionTag = document.getElementById("morning");
    morningDecisionTag.textContent = morningScenes[i].prompt;
    // First choice
    const morningChoice1HeadingTag = document.getElementById("morn-choice1-heading");
    morningChoice1HeadingTag.textContent = morningScenes[i].choices[0].text;

    const morningChoice1PriceTag = document.getElementById("morn-choice1-price");
    morningChoice1PriceTag.textContent = "$" + morningScenes[i].choices[0].cost;

    const morningChoice1Icon = document.getElementById("morn-choice1-icon");
    morningChoice1Icon.src = morningScenes[i].choices[0].iconPath;
    
    // Second choice
    const morningChoice2HeadingTag = document.getElementById("morn-choice2-heading")
    morningChoice2HeadingTag.textContent = morningScenes[i].choices[1].text

    const morningChoice2PriceTag = document.getElementById("morn-choice2-price")
    morningChoice2PriceTag.textContent = "$" + morningScenes[i].choices[1].cost

    const morningChoice2Icon = document.getElementById("morn-choice2-icon");
    morningChoice2Icon.src = morningScenes[i].choices[1].iconPath;

    mornBtn1.addEventListener("click", function () {
      mornBtn1.textContent = "Happiness: " + morningScenes[i].choices[0].happiness;
      budget = budget - morningScenes[i].choices[0].cost;
      happy = happy + morningScenes[i].choices[0].happiness;
      document.getElementById("budget").innerText = "Budget: $" + budget.toFixed(2);
      mornBtn1.disabled = true;
      mornBtn2.disabled = true;
    });

    mornBtn2.addEventListener("click", function () {
      mornBtn2.textContent = "Happiness: " + morningScenes[i].choices[1].happiness;
      budget = budget - morningScenes[i].choices[1].cost;
      happy = happy + morningScenes[i].choices[1].happiness;
      document.getElementById("budget").innerText = "Budget: $" + budget.toFixed(2);
      mornBtn1.disabled = true;
      mornBtn2.disabled = true;
    });

    // --- Midday ---
    const middayPrompt = document.getElementById("Midday");
    middayPrompt.textContent = middayScenes[i].prompt;
    midBtn1.textContent = middayScenes[i].choices[0].text + ": $" + middayScenes[i].choices[0].cost;
    midBtn2.textContent = middayScenes[i].choices[1].text + ": $" + middayScenes[i].choices[1].cost;

    midBtn1.addEventListener("click", function () {
      midBtn1.textContent = "Happiness: " + middayScenes[i].choices[0].happiness;
      budget = budget - middayScenes[i].choices[0].cost;
      happy = happy + middayScenes[i].choices[0].happiness;
      document.getElementById("budget").innerText = "Budget: $" + budget.toFixed(2);
      midBtn1.disabled = true;
      midBtn2.disabled = true;
    });

    midBtn2.addEventListener("click", function () {
      midBtn2.textContent = "Happiness: " + middayScenes[i].choices[1].happiness;
      budget = budget - middayScenes[i].choices[1].cost;
      happy = happy + middayScenes[i].choices[1].happiness;
      document.getElementById("budget").innerText = "Budget: $" + budget.toFixed(2);
      midBtn1.disabled = true;
      midBtn2.disabled = true;
    });

    // --- Night ---
    const nightPrompt = document.getElementById("night");
    nightPrompt.textContent = nightScenes[i].prompt;
    nightBtn1.textContent = nightScenes[i].choices[0].text + ": $" + nightScenes[i].choices[0].cost;
    nightBtn2.textContent = nightScenes[i].choices[1].text + ": $" + nightScenes[i].choices[1].cost;

    nightBtn1.addEventListener("click", function () {
      nightBtn1.textContent = "Happiness: " + nightScenes[i].choices[0].happiness;
      budget = budget - nightScenes[i].choices[0].cost;
      happy = happy + nightScenes[i].choices[0].happiness;
      document.getElementById("budget").innerText = "Budget: $" + budget.toFixed(2);
      nightBtn1.disabled = true;
      nightBtn2.disabled = true;
    });

    nightBtn2.addEventListener("click", function () {
      nightBtn2.textContent = "Happiness: " + nightScenes[i].choices[1].happiness;
      budget = budget - nightScenes[i].choices[1].cost;
      happy = happy + nightScenes[i].choices[1].happiness;
      document.getElementById("budget").innerText = "Budget: $" + budget.toFixed(2);
      nightBtn1.disabled = true;
      nightBtn2.disabled = true;
    });
  }else{
    console.log("done");
  }
}


