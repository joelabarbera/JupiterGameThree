'use strict'
// The following object is used to track the user's progress throughout the game
const userProgress = {
  happiness: 0,
  invest: 0,
  emergency: 0,
  rent: 500,
  budget: 800
}

const morningScenes = [
  {
    prompt: "You overslept and need breakfast fast.",
    choices: [
      { text: "Grab a bagel on the way", cost: 4, happiness: 1, iconPath: '/icons/order-food.svg' },
      { text: "Skip breakfast", cost: 0, happiness: -1, iconPath: '/icons/no-donut.svg' }
    ]
  },
  {
    prompt: "It’s a sunny morning—what’s your start?",
    choices: [
      { text: "Go for a jog", cost: 0, happiness: 2, iconPath: '/icons/jog.svg' },
      { text: "Sleep in a little more", cost: 0, happiness: 1, iconPath: '/icons/gym.svg' }
    ]
  },
  {
    prompt: "You need caffeine but you’re low on time.",
    choices: [
      { text: "Quick drive to Starbucks", cost: 6, happiness: 1, iconPath: '/icons/starbucks.svg' },
      { text: "Brew coffee at home", cost: 1, happiness: 1, iconPath: '/icons/coffee-machine.svg' }
    ]
  },
  {
    prompt: "You’re hungry but also in a rush.",
    choices: [
      { text: "Order breakfast sandwich", cost: 7, happiness: 1, iconPath: '/icons/order-food.svg' },
      { text: "Make toast at home", cost: 2, happiness: 0, iconPath: '/icons/cook-at-home.svg' }
    ]
  },
  {
    prompt: "You want to move your body.",
    choices: [
      { text: "Gym session", cost: 5, happiness: 2, iconPath: '/icons/gym.svg' },
      { text: "Home workout", cost: 0, happiness: 1, iconPath: '/icons/jog.svg' }
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
      { text: "Buy a donut", cost: 5, happiness: 1, iconPath: 'icons/donut.svg' },
      { text: "Resist the urge", cost: 0, happiness: 0, iconPath: 'icons/no-donut.svg' }
    ]
  }
  /*
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
      { text: "Skip it", cost: 0, happiness: 0, iconPath: 'icons/X.svg' }
    ]
  },
  {
    prompt: "Feeling curious. Choose an activity:",
    choices: [
      { text: "Visit the library", cost: 0, happiness: 1, iconPath: 'icons/library.svg' },
      { text: "Go to a museum", cost: 10, happiness: 1, iconPath: 'icons/museum.svg' }
    ]
  },
  {
    prompt: "You see a new pet toy online. What do you do?",
    choices: [
      { text: "Buy it", cost: 10, happiness: 1, iconPath: 'icons/buy.svg' },
      { text: "Don't buy it", cost: 0, happiness: 0, iconPath: 'icons/dont-buy.svg' }
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
  */
];

const nightScenes = [
  {
    prompt: "Your friends want to hang out. Choose an activity.",
    choices: [
      { text: "Go to the movies", cost: 25, happiness: 1, iconPath: 'icons/movie-theater.svg' },
      { text: "Play video games", cost: 0, happiness: 1, iconPath: 'icons/video-game.svg' }
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
    prompt: "You want a midnight meal. How do you get food?",
    choices: [
      { text: "Cook your own food", cost: 5, happiness: 0, iconPath: '/icons/cook-at-home.svg' },
      { text: "Order Food", cost: 20, happiness: 1, iconPath: '/icons/order-food.svg' }
    ]
  },

  {
    prompt: "It's dinner time. What do you eat?",
    choices: [
      { text: "Order pizza", cost: 18, happiness: 1, iconPath: '/icons/pizza.svg' },
      { text: "Cook dinner at home", cost: 5, happiness: 0, iconPath: '/icons/cook-at-home.svg' }
    ]
  },
  {
    prompt: "You’re craving something sweet before bed.",
    choices: [
      { text: "Bake something simple", cost: 6, happiness: 1, iconPath: '/icons/cook-at-home.svg' },
      { text: "Order dessert delivery", cost: 14, happiness: 2, iconPath: '/icons/order-food.svg' }
    ]
  },
  {
    prompt: "There’s a local band playing downtown.",
    choices: [
      { text: "Go check it out", cost: 25, happiness: 2, iconPath: 'icons/concert.svg' },
      { text: "Stream music at home", cost: 0, happiness: 0, iconPath: 'icons/tv.svg' }
    ]
  },
  {
    prompt: "You’ve got an early morning tomorrow.",
    choices: [
      { text: "Wind down with a show and sleep early", cost: 0, happiness: 1, iconPath: 'icons/tv.svg' },
      { text: "Gaming session with friends", cost: 0, happiness: 2, iconPath: 'icons/video-game.svg' }
    ]
  },
  {
    prompt: "Roommates suggest a pizza split.",
    choices: [
      { text: "Join in and split a pie", cost: 9, happiness: 2, iconPath: '/icons/pizza.svg' },
      { text: "Make a quick dinner at home", cost: 4, happiness: 1, iconPath: '/icons/cook-at-home.svg' }
    ]
  }

  /*
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


/*
  The variable day is used to keep track of the day that the user is on
  0 = Monday
  1 = Tuesday
  2 = Wednesday
  3 = Thursday
  4 = Friday
*/
let day = 0;
const dayTag = document.getElementById("week-day");

/*
  The following 3 variables are used to track the buttons that the user has selected. It is user for:
  1) Updating the happiness & budget if the user has changed activity of the same pair.
  2) Enabling the next button after user has selected a activity for all 3 parts of a day

  0 = no choices selected
  1 = left choice selected (btn1)
  2 = right choice selected (btn2)
*/
let mornSelected = 0, middaySelected = 0, nightSelected = 0;


/*
  The following 6 buttons are used for event listeners
  Variables labeled 1 represents the left button
  Variables labeled 2 represents the right button
*/
const mornBtn1 = document.getElementById("morn-choice1");
const mornBtn2 = document.getElementById("morn-choice2");
const midBtn1 = document.getElementById("mid-choice1");
const midBtn2 = document.getElementById("mid-choice2");
const nightBtn1 = document.getElementById("night-choice1");
const nightBtn2 = document.getElementById("night-choice2");

const rArrow = document.getElementById('right-arrow');
const budgetElement = document.getElementById("budget-display");


function goToInstructionPage() {

  const welcomePageTag = document.getElementById("welcome-page");
  welcomePageTag.classList.add("hide");

  const instructionPageTag = document.getElementById("instruction-page");
  instructionPageTag.classList.remove("hide");
}

function goToMainPage(event) {
  event.preventDefault();

  // Validate the inputs to make sure their sum is less than $700
  const rentAmount = parseInt(document.getElementById('rent-amount').value);
  const investAmount = parseInt(document.getElementById('invest-amount').value);
  const emergencyAmount = parseInt(document.getElementById('emergency-amount').value);


  if (rentAmount + investAmount + emergencyAmount > 700) {
    alert("You have exceeded the budget. Please try again");
  }
  else if (isNaN(investAmount) || isNaN(emergencyAmount)) {
    alert("You are missing an input. Put 0 if you don't want to put any money into it.")
  }
  else {
    userProgress.emergency = emergencyAmount;
    userProgress.invest = investAmount;

    console.log(userProgress.budget, emergencyAmount, investAmount, userProgress.rent)
    userProgress.budget = userProgress.budget - emergencyAmount - investAmount - userProgress.rent;



    const instructionPageTag = document.getElementById("instruction-page");
    instructionPageTag.classList.add("hide");

    const mainPageTag = document.getElementById("main-page");
    mainPageTag.classList.remove("hide");

    game();
    console.log("test");

  }

}

function goToEndPage() {
  let message = "";

  let game = document.getElementById("main-page");
  game.classList.add("hide");
  let endScreen = document.getElementById("end-screen");
  endScreen.classList.remove("hide");

  const finalImageS = document.getElementById("final-img");

  const winSound = document.getElementById("lesson-complete-sound");
  winSound.volume = 0.2
  const loseSound = document.getElementById("lose-sound");
  loseSound.volume = 0.2

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
  document.getElementById("happiness-score").textContent = "Final Happiness: " + userProgress.happiness;

  document.getElementById("invested-amount").textContent = `Invested: $${userProgress.invest || 0}`;
  document.getElementById("emergency-final").textContent =
    `Emergency Savings: $${userProgress.emergency || 0}`;

  const happinessPercentage = Math.round((userProgress.happiness / 15) * 100);
  document.getElementById("happiness-percentage").textContent = `Happiness: ${happinessPercentage}%`;


  let finBudget = document.getElementById("final-budget");
  if (userProgress.budget >= 0) {
    finBudget.innerText = "Congrats you did not go over budget! Final Total: $" + userProgress.budget;
    finBudget.style.color = "green";
    finBudget.style.textShadow = "2px 2px 4px #51ba3f";
    confetti({
      particleCount: 250,
      spread: 80,
      origin: { y: 0.6 }
    })
    winSound.play();
  } else {
    finBudget.innerText = "You failed. Budget: " + userProgress.budget.toFixed(2);
    finBudget.style.color = "red";
    finBudget.style.textShadow = "2px 2px 4px rgb(248, 94, 33)";
    loseSound.play();
  }

  //Determining which image to display at the end
  let happinessPercent = (userProgress.happiness / 15) * 100;
  let imgChosen = "";
  if (userProgress.budget <= 0 && happinessPercent <= 50) {
    imgChosen = "images/scenario_1.png";
  }
  else if (userProgress.budget >= 0 && happinessPercent <= 50) {
    imgChosen = "images/scenario_2.png";
  }
  else if (userProgress.budget <= 0 && happinessPercent >= 50) {
    imgChosen = "images/scenario_3.png";
  }
  else {
    imgChosen = "images/scenario_4.png";
  }

  finalImageS.src = imgChosen;
}

function updateHappinessBar() {
  const bar = document.getElementById("bar");
  const percent = (userProgress.happiness / 15) * 100;

  bar.style.width = percent + "%";
  // changes color based on percentage level 
  bar.style.background = percent < 50 ? "red" : "green"
}

// This function resets the style, makes the buttons clickable, and is used when user goes to next day
function resetChoiceButtons() {
  const buttons = ["morn-choice1", "morn-choice2",
    "mid-choice1", "mid-choice2",
    "night-choice1", "night-choice2"];

  buttons.forEach(id => {
    const btn = document.getElementById(id);
    btn.style.opacity = "100%";
    btn.style.border = "";
    btn.disabled = false;
    btn.classList.remove("button-selected");
  });
}

function checkNext() {
  rArrow.disabled = !(mornSelected !== 0 && middaySelected !== 0 && nightSelected !== 0)
}


/*
  Pre: happiness: an integer from 0 to 1 (inclusive). It is the happiness of the activity that was selected.
       cost: an integer >= 0. It is the cost of the activity that was selected.
       otherHappiness: an integer from 0 to 1 (inclusive). It is the happiness of the activity that was not selected, in the same pair.
       otherCost: an integer >= 0. It is the cost of the activity that was not selected, in the same pair.
       selected: an integer from -1 to 2 (inclusive). It is used to determine if the user is selecting an activity from a pair for the 1st time. -1 represented an emergency event.
  
  Post: updates userProgress object accordingly to the button clicked
*/

function updateUserProgress(happiness, cost, otherHappiness, otherCost, selected) {
  // Emergency event: try to pay $50 from emergency fund, remainder from budget
  if (selected === -1) {
    const remainder = userProgress.emergency - 50;

    if (userProgress.emergency >= 50) [
      userProgress.emergency = remainder
    ]
    else {
      userProgress.emergency = 0
      userProgress.budget = userProgress.budget + remainder
      document.getElementById("budget-display").textContent = "Budget: $" + userProgress.budget;
    }
    return;
  }
  else if (selected === 0) {
    userProgress.happiness += happiness;
    userProgress.budget -= cost;
  }
  else {
    userProgress.happiness -= otherHappiness;
    userProgress.happiness += happiness;

    userProgress.budget += otherCost;
    userProgress.budget -= cost;
  }

  updateHappinessBar();
  document.getElementById("budget-display").textContent = "Budget: $" + userProgress.budget;
}



function game() {
  // Reset tracking variables
  resetChoiceButtons();

  mornSelected = 0;
  nightSelected = 0;
  middaySelected = 0;

  rArrow.disabled = true;

  budgetElement.innerText = "Budget: $" + userProgress.budget;

  if (day <= 4) {
    if (day === 0) {
      dayTag.innerText = "Monday";
    }
    else if (day === 1) {
      dayTag.innerText = "Tuesday";
    }
    else if (day === 2) {
      dayTag.innerText = "Wednesday";

      if (userProgress.emergency === 0 || userProgress.emergency === undefined) {
        alert("❗Emergency!❗ \n" +
          "Your pet got sick, and the vet visit cost you $50 \n" +
          "Since you don't have any money saved for an emergency, $50 will be deducted from your budget.");
      }
      else {
        alert("❗Emergency!❗ \n" +
          "Your pet got sick, and the vet visit cost you $50 \n" +
          "Since you saved money for an emergency, $50 will be deducted there and any leftovers will be deducted from your budget");
      }
      updateUserProgress(0, 0, 0, 0, -1);

    }
    else if (day === 3) {
      dayTag.innerText = "Thursday";
    }
    else if (day === 4) {
      dayTag.innerText = "Friday";
    }


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

    mornBtn1.onclick = function () {
      // Only call updateUserProgress() if the user clicks on this activity for the 1st time or changing it to this activity
      if (mornSelected !== 1) {
        updateUserProgress(morningActivity.choices[0].happiness,
          morningActivity.choices[0].cost,
          morningActivity.choices[1].happiness,
          morningActivity.choices[1].cost,
          mornSelected)
      }

      mornSelected = 1;
      checkNext();

      mornBtn1.classList.add("button-selected");
      mornBtn2.classList.remove("button-selected");
    };

    mornBtn2.onclick = function () {
      // Only change userProgress if the user clicks on this activity for the 1st time or changing it to this activity
      if (mornSelected !== 2) {
        updateUserProgress(morningActivity.choices[1].happiness,
          morningActivity.choices[1].cost,
          morningActivity.choices[0].happiness,
          morningActivity.choices[0].cost,
          mornSelected)
      }

      mornSelected = 2;
      checkNext();

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


    midBtn1.onclick = function () {
      // Only change userProgress if the user clicks on this activity for the 1st time or changing it to this activity
      if (middaySelected !== 1) {
        updateUserProgress(middayActivity.choices[0].happiness,
          middayActivity.choices[0].cost,
          middayActivity.choices[1].happiness,
          middayActivity.choices[1].cost,
          middaySelected)
      }

      middaySelected = 1;
      checkNext();


      midBtn1.classList.add("button-selected");
      midBtn2.classList.remove("button-selected");
    };

    midBtn2.onclick = function () {
      // Only change userProgress if the user clicks on this activity for the 1st time or changing it to this activity
      if (middaySelected !== 2) {
        updateUserProgress(middayActivity.choices[1].happiness,
          middayActivity.choices[1].cost,
          middayActivity.choices[0].happiness,
          middayActivity.choices[0].cost,
          middaySelected)
      }

      middaySelected = 2;
      checkNext();

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

    nightBtn1.onclick = function () {
      // Only change userProgress if the user clicks on this activity for the 1st time or changing it to this activity
      if (nightSelected !== 1) {
        updateUserProgress(nightActivity.choices[0].happiness,
          nightActivity.choices[0].cost,
          nightActivity.choices[1].happiness,
          nightActivity.choices[1].cost,
          nightSelected)
      }

      nightSelected = 1;
      checkNext();

      nightBtn1.classList.add("button-selected");
      nightBtn2.classList.remove("button-selected");
    };

    nightBtn2.onclick = function () {
      // Only change userProgress if the user clicks on this activity for the 1st time or changing it to this activity
      if (nightSelected !== 2) {
        updateUserProgress(nightActivity.choices[1].happiness,
          nightActivity.choices[1].cost,
          nightActivity.choices[0].happiness,
          nightActivity.choices[0].cost,
          nightSelected)
      }

      nightSelected = 2;
      checkNext();

      nightBtn2.classList.add("button-selected");
      nightBtn1.classList.remove("button-selected");
    };
  }
}

// Event listeners
document.getElementById("start-button").addEventListener("click", goToInstructionPage); //start button on welcome page
document.getElementById("game-button").addEventListener("click", goToMainPage); //start button on instructions pa
document.getElementById("right-arrow").addEventListener("click", function () {
  if (day < 4) {
    day++;
    game();
  } else {
    goToEndPage();
  }
});
document.getElementById("reload-btn").addEventListener("click", function () {
  window.location.reload();
}); //reload button