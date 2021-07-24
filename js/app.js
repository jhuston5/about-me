'use strict';

// get the user's name so we can greet them
let username = prompt('What is your name?');

alert('Hello ' + username + '! Here are some questions about me!');

let userScore = 0;

// Use arrays for stretch goal
// Store questions and responses in containers
let questionOne =
['Did Josh attend college? Answer yes or no.',
  'Correct! Josh attended college at Brigham Young University.',
  'Sorry, you are incorrect. Josh was a history major at BYU!'];

let questionTwo =
['Does Josh have any children? Answer yes or no.',
  'Correct! Josh and his wife are expecting their first child in February',
  'Not quite! They are pregnant with their first child due in February.'];

let questionThree =
['Is Josh from Utah?',
  'Actually, Josh is from Arizona!',
  'That is correct! Josh is originally from Arizona.'
];

let questionFour =
['Has Josh worked in the corporate sector?',
  'That\'s right! Josh works for Zillow!',
  'Actually, Josh does work for a civilian employer, the real estate company, Zillow!'
];

let questionFive =
['Has Josh ever served in the military?',
  'Yes! Josh also works for part-time for the National Guard.',
  'Josh has actually been a part of both the Arizona and South Carolina Army National Guard.'
];

// final array of arrays
let joshQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

// iterate through the user prompts
for (let i = 0; i < joshQuestions.length; i++) {
  let joshAnswer = prompt(joshQuestions[i][0]).toLowerCase();
  console.log(joshAnswer);
  if (joshAnswer === 'yes' || joshAnswer === 'y') {
    alert(joshQuestions[i][1]);
    userScore++;
  } else if (joshAnswer === 'no' || joshAnswer === 'n') {
    alert(joshQuestions[i][2]);
  }
  else {
    alert('Sorry, answers need to be yes or no.');
  }
}


//Add 6th question
function yearsMarriedQuestion(){
  let attempts = 4;
  for (let i = 0; i < 4; i++) {
    let userMarriedGuess = prompt('How many years has Josh been married to Taylor?');
    let userMarriedInt = parseInt(userMarriedGuess);
    let yearsMarriedAnswer = 4;
    if (userMarriedInt < yearsMarriedAnswer) {
      alert('Too low!');
    } else if (userMarriedInt > yearsMarriedAnswer) {
      alert('Too high');
    }
    else if (userMarriedInt === yearsMarriedAnswer) {
      alert('You are correct!');
      userScore++;
      break;
    }
    else if (i === 4) {
      alert(`Sorry! Josh and Taylor have been married for ${yearsMarriedAnswer} years`);
    }
    attempts--;
    alert(`That guess was not correct. You have ${attempts} attempts remaining`);
  }
}
yearsMarriedQuestion();



// Ask what Josh's favorite color is and alert to the number of attempts remaining

function favoriteColorsQuestion(){
  let myFavColors = ['desert tan', 'black', 'gold'];
  let attemptsRemaining = 6;
  let guessedCorrectly = false;
  while (attemptsRemaining && !guessedCorrectly){
    let userResponse = prompt('What is Josh\'s favorite color?');
    for (let i = 0; i < myFavColors.length; i++) {
      if (userResponse === myFavColors[i]) {
        alert('You are correct!');
        guessedCorrectly = true;
        userScore++;
      }
    }
    attemptsRemaining--;
    if(guessedCorrectly === true) {
      alert(`The following are my 3 favorite colors: ${myFavColors}`);
      break;
    }
    alert(`That guess was not correct. You have ${attemptsRemaining} attempts remaining`);
  }
}
favoriteColorsQuestion();

//Aggregate the number of correct questions and display how many were right
alert(`You answered ${userScore} questions correct out of 7.`);
alert(username + ', thanks for taking some time to learn about me. Have a great day!');
