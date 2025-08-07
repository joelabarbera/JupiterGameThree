'use strict'
document.getElementById("start-button").addEventListener("click", goToInstructionPage); //start button on welcome page
document.getElementById("my-bttn").addEventListener("click", goToMainPage); //start button on instructions pa
document.getElementById("reload-btn").addEventListener("click", function () {
    window.location.reload();
}); //reload button


const morningScenes = [
  {
    prompt: "How to start the day:",
    choices: [
      { text: "Doordash", cost: 15, happiness: 3, iconPath: '/icons/cook-at-home.svg' },
      { text: "Make eggs at home", cost: 1, happiness: 1, iconPath: '/icons/order-food.svg' }
    ]
  },
  {
    prompt: "Breakfast time! Pick your fuel:",
    choices: [
      { text: "Eat at home", cost: 5, happiness: 0, iconPath: '/icons/cook-at-home.svg' },
      { text: "Eat out with friends", cost: 15, happiness: 1, iconPath: '/icons/order-food.svg' }
    ]
  },
  {
    prompt: "You wake up and need your caffeine fix. What do you do?",
    choices: [
      { text: "Go to Starbucks", cost: 6, happiness: 1, iconPath: '/icons/starbucks.svg' },
      { text: "Make coffee at home", cost: 1, happiness: 0, iconPath: '/icons/coffee-machine.svg' }
    ]
  },
  {
    prompt: "You want to exercise. Where do you go?",
    choices: [
      { text: "Go for a jog", cost: 0, happiness: 1, iconPath: '/icons/jog.svg' },
      { text: "Go to the gym", cost: 5, happiness: 1, iconPath: '/icons/gym.svg' }
    ]
  },
  {
    prompt: "Sweet tooth strikes! What do you grab?",
    choices: [
      { text: "Buy donut and juice", cost: 4, happiness: 1 },
      { text: "Refill MetroCard instead", cost: 33, happiness: 1 }
    ]
  }
    
];

const middayScenes = [
  {
    prompt: "You see new trendy clothes in the store. Do you buy it?",
    choices: [
      { text: "Yes", cost: 50, happiness: 1, iconPath: 'icons/clothe.svg' },
      { text: "No", cost: 0, happiness: 0, iconPath: 'icons/X.svg' }
    ]
  },
  {
    prompt: "Lunch time! How do you eat? ",
    choices: [
      { text: "Eat at home", cost: 5, happiness: 0, iconPath: '/icons/cook-at-home.svg' },
      { text: "Eat out with friends", cost: 20, happiness: 1, iconPath: '/icons/order-food.svg' }
    ]
  },
  {
    prompt: "Got some free time. How do you spend it?",
    choices: [
      { text: "Volunteer at animal shelter", cost: 0, happiness: 1, iconPath: '/icons/dog.svg' },
      { text: "Go shopping at the mall", cost: 50, happiness: 1, iconPath: '/icons/mall.svg' }
    ]
  },
  {
    prompt: "A new hot video game just released. What do you do?",
    choices: [
      { text: "Buy it", cost: 50, happiness: 1, iconPath: 'icons/video-game.svg' },
      { text: "Skip it", cost: 0, happiness: 0 , iconPath: 'icons/X.svg'}
    ]
  },
  {
    prompt: "Feeling curious. Choose an activity:",
    choices: [
      { text: "Visit the library", cost: 0, happiness: 0, iconPath: 'icons/library.svg' },
      { text: "Go to a museum", cost: 10, happiness: 1, iconPath: 'icons/museum.svg'}
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
    prompt: "Dinner time! How do you eat? ",
    choices: [
      { text: "Eat at home", cost: 5, happiness: 0 },
      { text: "Eat out with friends", cost: 20, happiness: 1 }
    ]
  },
  {
    prompt: "Your friends want to hang out. Choose an activity.",
    choices: [
      { text: "Go to the movies", cost: 25, happiness: 1 },
      { text: "Play video games", cost: 0, happiness: 0 }
    ]
  },
  {
    prompt: "Your favorite singer is having a concert this night. What do you do?",
    choices: [
      { text: "Have a blast at the concert", cost: 50, happiness: 1 },
      { text: "Stay home", cost: 0, happiness: 0 }
    ]
  },
  {
    prompt: "Your feeling extra hungry. How do you get food?",
    choices: [
      { text: "Cook your own food", cost: 5, happiness: 0, iconPath: '/icons/cook-at-home.svg' },
      { text: "Order Food", cost: 20, happiness: 1, iconPath: '/icons/order-food.svg' }
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
const budgetElement = document.getElementById("budget-display");

//End Screen
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
    confetti({
      particleCount: 250,
      spread: 80,
      origin: { y: 0.6}
    })
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

function updateHappinessBar(){
  const bar = document.getElementById("bar");
  const percent = Math.max(0, Math.min(100, (happy/50)*100)); //0-100 happiness 
  bar.style.width = percent + "%";
}

// Main menu start bttn logic
function goToMainPage(event){
  event.preventDefault();

  // Validate the inputs to make sure their sum is less than $700
  const rentAmount = parseInt(document.getElementById('rent-amount').value);
  const investAmount = parseInt(document.getElementById('invest-amount').value);
  const emergencyAmount = parseInt(document.getElementById('emergency-amount').value);
  budget = budget - investAmount.toFixed(2);
  budget = budget - emergencyAmount.toFixed(2);


  
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

//Event listeners for arrows
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

//Main Game
function game(){

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

    // Populate Morning Choices
    const morningDecisionTag = document.getElementById("morning");
    morningDecisionTag.textContent = morningScenes[i].prompt;
    
    // First choice
    const morningChoice1HeadingTag = document.getElementById("morn-choice1-heading");
    morningChoice1HeadingTag.textContent = morningScenes[i].choices[0].text;

    const morningChoice1PriceTag = document.getElementById("morn-choice1-price");
    morningChoice1PriceTag.textContent = "$" + morningScenes[i].choices[0].cost;

    const morningChoice1IconTag = document.getElementById("morn-choice1-icon");
    morningChoice1IconTag.src = morningScenes[i].choices[0].iconPath;

    const morningChoice1HappinessTag = document.getElementById("morn-choice1-happiness");
    morningChoice1HappinessTag.textContent = morningScenes[i].choices[0].happiness
    
    // Second choice
    const morningChoice2HeadingTag = document.getElementById("morn-choice2-heading")
    morningChoice2HeadingTag.textContent = morningScenes[i].choices[1].text

    const morningChoice2PriceTag = document.getElementById("morn-choice2-price")
    morningChoice2PriceTag.textContent = "$" + morningScenes[i].choices[1].cost

    const morningChoice2Icon = document.getElementById("morn-choice2-icon");
    morningChoice2Icon.src = morningScenes[i].choices[1].iconPath;

    const morningChoice2HappinessTag = document.getElementById("morn-choice2-happiness");
    morningChoice2HappinessTag.textContent = morningScenes[i].choices[1].happiness

    mornBtn1.addEventListener("click", function () {
      budget = budget - morningScenes[i].choices[0].cost;
      happy = happy + morningScenes[i].choices[0].happiness;
      updateHappinessBar();
      document.getElementById("budget-display").innerText = "Budget: $" + budget.toFixed(2);
      mornBtn1.disabled = true;
      mornBtn2.disabled = true;
    });

    mornBtn2.addEventListener("click", function () {
      budget = budget - morningScenes[i].choices[1].cost;
      happy = happy + morningScenes[i].choices[1].happiness;
      updateHappinessBar();
      document.getElementById("budget-display").innerText = "Budget: $" + budget.toFixed(2);
      mornBtn1.disabled = true;
      mornBtn2.disabled = true;
    });

    // Populate Midday Choices
    const middayDecisionTag = document.getElementById("midday");
    middayDecisionTag.textContent = middayScenes[i].prompt;
    
    // First choice
    const middayChoice1HeadingTag = document.getElementById("midday-choice1-heading");
    middayChoice1HeadingTag.textContent = middayScenes[i].choices[0].text;

    const middayChoice1PriceTag = document.getElementById("midday-choice1-price");
    middayChoice1PriceTag.textContent = "$" + middayScenes[i].choices[0].cost;

    const middayChoice1IconTag = document.getElementById("midday-choice1-icon");
    middayChoice1IconTag.src = middayScenes[i].choices[0].iconPath;

    const middayChoice1HappinessTag = document.getElementById("midday-choice1-happiness");
    middayChoice1HappinessTag.textContent = middayScenes[i].choices[0].happiness
    
    // Second choice
    const middayChoice2HeadingTag = document.getElementById("midday-choice2-heading")
    middayChoice2HeadingTag.textContent = middayScenes[i].choices[1].text

    const middayChoice2PriceTag = document.getElementById("midday-choice2-price")
    middayChoice2PriceTag.textContent = "$" + middayScenes[i].choices[1].cost

    const middayChoice2Icon = document.getElementById("midday-choice2-icon");
    middayChoice2Icon.src = middayScenes[i].choices[1].iconPath;

    const middayChoice2HappinessTag = document.getElementById("midday-choice2-happiness");
    middayChoice2HappinessTag.textContent = middayScenes[i].choices[1].happiness

    midBtn1.addEventListener("click", function () {
      midBtn1.textContent = "Happiness: " + middayScenes[i].choices[0].happiness;
      budget = budget - middayScenes[i].choices[0].cost;
      happy = happy + middayScenes[i].choices[0].happiness;
      updateHappinessBar();
      document.getElementById("budget-display").innerText = "Budget: $" + budget.toFixed(2);
      midBtn1.disabled = true;
      midBtn2.disabled = true;
    });

    midBtn2.addEventListener("click", function () {
      midBtn2.textContent = "Happiness: " + middayScenes[i].choices[1].happiness;
      budget = budget - middayScenes[i].choices[1].cost;
      happy = happy + middayScenes[i].choices[1].happiness;
      updateHappinessBar();
      document.getElementById("budget-display").innerText = "Budget: $" + budget.toFixed(2);
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
      updateHappinessBar();
      document.getElementById("budget-display").innerText = "Budget: $" + budget.toFixed(2);
      nightBtn1.disabled = true;
      nightBtn2.disabled = true;
    });

    nightBtn2.addEventListener("click", function () {
      nightBtn2.textContent = "Happiness: " + nightScenes[i].choices[1].happiness;
      budget = budget - nightScenes[i].choices[1].cost;
      happy = happy + nightScenes[i].choices[1].happiness;
      updateHappinessBar();
      document.getElementById("budget-display").innerText = "Budget: $" + budget.toFixed(2);
      nightBtn1.disabled = true;
      nightBtn2.disabled = true;
    });
  }else{
    console.log("done");
  }
}


