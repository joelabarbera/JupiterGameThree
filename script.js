'use strict'
document.getElementById("start-button").addEventListener("click", goToInstructionPage); //start button on welcome page
document.getElementById("my-bttn").addEventListener("click", goToMainPage); //start button on instructions pa
document.getElementById("reload-btn").addEventListener("click", function () {
window.location.reload();
}); //reload button


const morningScenes = [
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
  /*
  {
    prompt: "Sweet tooth strikes! What do you grab?",
    choices: [
      { text: "Buy donut and juice", cost: 4, happiness: 1 },
      { text: "Refill MetroCard instead", cost: 33, happiness: 1 }
    ]
  }
  {
    prompt: "How to start the day:",
    choices: [
      { text: "Doordash", cost: 15, happiness: 3, iconPath: '/icons/cook-at-home.svg' },
      { text: "Make eggs at home", cost: 1, happiness: 1, iconPath: '/icons/order-food.svg' }
    ]
  },
  */
    
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
  /*
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
    */
];

const nightScenes = [
  {
    prompt: "Your friends want to hang out. Choose an activity.",
    choices: [
      { text: "Go to the movies", cost: 25, happiness: 1, iconPath: 'icons/movie-theater.svg' },
      { text: "Play video games", cost: 0, happiness: 0, iconPath: 'icons/video-game.svg'}
    ]
  },
  {
    prompt: "Your favorite singer is having a concert this night. What do you do?",
    choices: [
      { text: "Have a blast at the concert", cost: 50, happiness: 1, iconPath: 'icons/concert.svg' },
      { text: "Live stream from home", cost: 0, happiness: 0, iconPath: 'icons/tv.svg' }
    ]
  },
  {
    prompt: "Your feeling extra hungry. How do you get food?",
    choices: [
      { text: "Cook your own food", cost: 5, happiness: 0, iconPath: '/icons/cook-at-home.svg' },
      { text: "Order Food", cost: 20, happiness: 1, iconPath: '/icons/order-food.svg' }
    ]
  },
  /*
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
    */
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
  if (userProgress.happiness >= 40) {
    message = "🌟 Zen Master: You stayed happy and balanced all week!";
  } else if (userProgress.happiness >= 25) {
    message = "😊 Chill & Balanced: You handled things pretty well.";
  } else if (userProgress.happiness >= 10) {
    message = "😐 Mildly Stressed: Some bumps, but you made it through.";
  } else if (userProgress.happiness >= 0) {
    message = "😬 Tense but Survived: That was a close one!";
  } else {
    message = "😢 Overwhelmed & Burnt Out: Time to reset and take care of yourself.";
  }
  finHappy.innerText = message;
  document.getElementById("hScore").innerText = "Final Happiness: " + userProgress.happiness;
  
  let finBudget = document.getElementById("final-budget");
  if (userProgress.budget >= 0){
    finBudget.innerText = "Congrats you did not go over budget! Final Total: $" + userProgress.budget;
    confetti({
      particleCount: 250,
      spread: 80,
      origin: { y: 0.6}
    })
  }else{
    finBudget.innerText = "You failed. Budget: " +  userProgress.budget.toFixed(2);
  }
}

function goToInstructionPage(){

  const welcomePageTag = document.getElementById("welcome-page");
  welcomePageTag.classList.add("hide");

  const instructionPageTag = document.getElementById("instruction-page");
  instructionPageTag.classList.remove("hide");
}

const userProgress = {
  happiness: 0,
  budget: 600
}


function updateHappinessBar() { 
  const bar = document.getElementById("bar");
  const percent = (userProgress.happiness / 15) * 100;
  bar.style.width = percent + "%";
  // changes color based on percentage level 
  if (percent < 25) {
  bar.style.backgroundColor = "red";
} else if (percent < 65) {
  bar.style.backgroundColor = "orange";
} else {
  bar.style.backgroundColor = "green";
}

}

function resetChoiceButtons() {
  const buttons = [
    "morn-choice1", "morn-choice2",
    "mid-choice1", "mid-choice2",
    "night-choice1", "night-choice2"
  ];
  buttons.forEach(id => {
    const btn = document.getElementById(id);
    btn.style.opacity = "100%";
    btn.style.border = "";
    btn.disabled = false;
  });
}

// Main menu start bttn logic
function goToMainPage(event){
  event.preventDefault();

  // Validate the inputs to make sure their sum is less than $700
  const rentAmount = parseInt(document.getElementById('rent-amount').value);
  const investAmount = parseInt(document.getElementById('invest-amount').value);
  const emergencyAmount = parseInt(document.getElementById('emergency-amount').value);
  userProgress.budget = userProgress.budget - investAmount.toFixed(2);
  userProgress.budget = userProgress.budget - emergencyAmount.toFixed(2);


  
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
  if (i == 0){
    i = i;
  }else if (i > 0 && i < 5){
    i--;
    console.log(i);
    game(); 
  }
  else{
    goToInstructionPage();
  }
}); 

/*
  Pre: happiness: an integer from 0 to 1 (inclusive). It is the happiness of the activity that was selected.
       cost: an integer >= 0. It is the cost of the activity that was selected.
       otherHappiness: an integer from 0 to 1 (inclusive). It is the happiness of the activity that was not selected, in the same pair.
       otherCost: an integer >= 0. It is the cost of the activity that was not selected
       selected: an integer from 0 to 2 (inclusive). It is used to determine if the user is selecting an activity from a pair for the 1st time.
  
  Post: updates userProgress object accordingly to the button clicked, 
*/
function updateUserProgress(happiness, cost, otherHappiness, otherCost, selected){
  console.log(selected)
  // If 1st time the user selects this activity, just update the happiness and budget of the selected activity
  if (selected === 0){
    userProgress.happiness = userProgress.happiness + happiness;
    userProgress.budget = userProgress.budget - cost;
  }
  // If user is changing activity, subtract the happiness of the FROM activity and add the happiness of the TO activity
  else{
    userProgress.happiness = userProgress.happiness - otherHappiness;
    userProgress.happiness = userProgress.happiness + happiness;

    userProgress.budget = userProgress.budget + otherCost;
    userProgress.budget = userProgress.budget - cost;
  }
  
  updateHappinessBar();
  document.getElementById("budget-display").innerText = "Budget: $" + userProgress.budget;
}

//Main Game
function game(){

  resetChoiceButtons();
  budgetElement.innerText = "Budget: $" + userProgress.budget;

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
    mornBtn1.classList.remove("button-selected");
    mornBtn2.classList.remove("button-selected");
    midBtn1.classList.remove("button-selected");
    midBtn2.classList.remove("button-selected");
    nightBtn1.classList.remove("button-selected");
    nightBtn2.classList.remove("button-selected");

    // Randomly pick a morning activity (repeats activity)
    const morningActivityIndex = Math.floor(Math.random() * (morningScenes.length));
    const morningActivity = morningScenes[morningActivityIndex];

    // Populate Morning Choices
    const morningDecisionTag = document.getElementById("morning");
    morningDecisionTag.textContent = morningActivity.prompt;
    
    // First choice
    const morningChoice1HeadingTag = document.getElementById("morn-choice1-heading");
    morningChoice1HeadingTag.textContent = morningActivity.choices[0].text;

    const morningChoice1PriceTag = document.getElementById("morn-choice1-price");
    morningChoice1PriceTag.textContent = "$" + morningActivity.choices[0].cost;

    const morningChoice1IconTag = document.getElementById("morn-choice1-icon");
    morningChoice1IconTag.src = morningActivity.choices[0].iconPath;
    
    // Second choice
    const morningChoice2HeadingTag = document.getElementById("morn-choice2-heading")
    morningChoice2HeadingTag.textContent = morningActivity.choices[1].text

    const morningChoice2PriceTag = document.getElementById("morn-choice2-price")
    morningChoice2PriceTag.textContent = "$" + morningActivity.choices[1].cost

    const morningChoice2Icon = document.getElementById("morn-choice2-icon");
    morningChoice2Icon.src = morningActivity.choices[1].iconPath;

    // 0 = no choices selected
    // 1 = left choice selected (btn1)
    // 2 = right choice selected (btn2)
    let mornSelected = 0;

    mornBtn1.onclick = function () {
      // Only change userProgress if the user clicks on this activity for the 1st time or changing it to this activity
      if (mornSelected !== 1){
        updateUserProgress(morningActivity.choices[0].happiness, 
                           morningActivity.choices[0].cost, 
                           morningActivity.choices[1].happiness, 
                           morningActivity.choices[1].cost, 
                           mornSelected)     
      }
       
      mornSelected = 1;
    
      mornBtn1.classList.add("button-selected");
      mornBtn2.classList.remove("button-selected");
    };

    mornBtn2.onclick = function () {
      // Only change userProgress if the user clicks on this activity for the 1st time or changing it to this activity
      if (mornSelected !== 2){
        updateUserProgress(morningActivity.choices[1].happiness, 
                           morningActivity.choices[1].cost, 
                           morningActivity.choices[0].happiness, 
                           morningActivity.choices[0].cost, 
                           mornSelected)
      }
      
      mornSelected = 2;
  
      mornBtn2.classList.add("button-selected");
      mornBtn1.classList.remove("button-selected");
    };

    // Randomly pick a midday activity (repeats activity)
    const middayActivityIndex = Math.floor(Math.random() * (middayScenes.length));
    const middayActivity = middayScenes[middayActivityIndex];

    // Populate Midday Choices
    const middayDecisionTag = document.getElementById("midday");
    middayDecisionTag.textContent = middayActivity.prompt;
    
    // First choice
    const middayChoice1HeadingTag = document.getElementById("midday-choice1-heading");
    middayChoice1HeadingTag.textContent = middayActivity.choices[0].text;

    const middayChoice1PriceTag = document.getElementById("midday-choice1-price");
    middayChoice1PriceTag.textContent = "$" + middayActivity.choices[0].cost;

    const middayChoice1IconTag = document.getElementById("midday-choice1-icon");
    middayChoice1IconTag.src = middayActivity.choices[0].iconPath;

    
    // Second choice
    const middayChoice2HeadingTag = document.getElementById("midday-choice2-heading")
    middayChoice2HeadingTag.textContent = middayActivity.choices[1].text

    const middayChoice2PriceTag = document.getElementById("midday-choice2-price")
    middayChoice2PriceTag.textContent = "$" + middayActivity.choices[1].cost

    const middayChoice2Icon = document.getElementById("midday-choice2-icon");
    middayChoice2Icon.src = middayActivity.choices[1].iconPath;

    // 0 = no choices selected
    // 1 = left choice selected (btn1)
    // 2 = right choice selected (btn2)
    let middaySelected = 0;

    midBtn1.onclick = function () {
      // Only change userProgress if the user clicks on this activity for the 1st time or changing it to this activity
      if (middaySelected !== 1){
        updateUserProgress(middayActivity.choices[0].happiness, 
                           middayActivity.choices[0].cost, 
                           middayActivity.choices[1].happiness, 
                           middayActivity.choices[1].cost, 
                           middaySelected)     
      }
       
      middaySelected = 1;


      midBtn1.classList.add("button-selected");
      midBtn2.classList.remove("button-selected");
    };

    midBtn2.onclick = function () {
      // Only change userProgress if the user clicks on this activity for the 1st time or changing it to this activity
      if (middaySelected !== 2){
        updateUserProgress(middayActivity.choices[1].happiness, 
                           middayActivity.choices[1].cost, 
                           middayActivity.choices[0].happiness, 
                           middayActivity.choices[0].cost, 
                           middaySelected)
      }
      
      middaySelected = 2;

      midBtn2.classList.add("button-selected");
      midBtn1.classList.remove("button-selected");
    };

    // Randomly pick a night activity (repeats activity)
    const nightActivityIndex = Math.floor(Math.random() * (nightScenes.length));
    const nightActivity = nightScenes[nightActivityIndex];

    // Populate Night Choices
    const nightDecisionTag = document.getElementById("night");
    nightDecisionTag.textContent = nightActivity.prompt;
    
    // First choice
    const nightChoice1HeadingTag = document.getElementById("night-choice1-heading");
    nightChoice1HeadingTag.textContent = nightActivity.choices[0].text;

    const nightChoice1PriceTag = document.getElementById("night-choice1-price");
    nightChoice1PriceTag.textContent = "$" + nightActivity.choices[0].cost;

    const nightChoice1IconTag = document.getElementById("night-choice1-icon");
    nightChoice1IconTag.src = nightActivity.choices[0].iconPath;

    // Second choice
    const nightChoice2HeadingTag = document.getElementById("night-choice2-heading")
    nightChoice2HeadingTag.textContent = nightActivity.choices[1].text

    const nightChoice2PriceTag = document.getElementById("night-choice2-price")
    nightChoice2PriceTag.textContent = "$" + nightActivity.choices[1].cost

    const nightChoice2Icon = document.getElementById("night-choice2-icon");
    nightChoice2Icon.src = nightActivity.choices[1].iconPath;

    // 0 = no choices selected
    // 1 = left choice selected (btn1)
    // 2 = right choice selected (btn2)
    let nightSelected = 0;

    nightBtn1.onclick = function () {
      // Only change userProgress if the user clicks on this activity for the 1st time or changing it to this activity
      if (nightSelected !== 1){
        updateUserProgress(nightActivity.choices[0].happiness, 
                           nightActivity.choices[0].cost, 
                           nightActivity.choices[1].happiness, 
                           nightActivity.choices[1].cost, 
                           nightSelected)     
      }
       
      nightSelected = 1;

      nightBtn1.classList.add("button-selected");
      nightBtn2.classList.remove("button-selected");
    };

    nightBtn2.onclick = function () {
      // Only change userProgress if the user clicks on this activity for the 1st time or changing it to this activity
      if (nightSelected !== 2){
        updateUserProgress(nightActivity.choices[1].happiness, 
                           nightActivity.choices[1].cost, 
                           nightActivity.choices[0].happiness, 
                           nightActivity.choices[0].cost, 
                           nightSelected)
      }
      
      nightSelected = 2;

      nightBtn2.classList.add("button-selected");
      nightBtn1.classList.remove("button-selected");
    };
  }else{
    console.log("done");
  }
}
