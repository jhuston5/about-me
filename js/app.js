'use strict';

// get the user's name so we can greet them
let username = prompt('What is your name?');

alert('Hello ' + username + '! Here are some questions about me!');

let userScore = 0;

// Ask if Josh went to college
let collegeAttendance = prompt('Did Josh attend college? Answer yes or no.').toLowerCase();
console.log('User answer: ' + collegeAttendance);

if (collegeAttendance === 'yes' || collegeAttendance === 'y' ) {
  // console.log('Correct! Josh attended college at Brigham Young University.');
  alert('Correct! Josh attended college at Brigham Young University.');
  userScore++;
} else if (collegeAttendance === 'no' || collegeAttendance === 'n') {
  alert('Sorry, you are incorrect. Josh was a history major at BYU!');
} else {
  alert('Sorry, answers need to be yes or no.');
}

//Ask if Josh has children
let haveChildren = prompt('Does Josh have any children? Answer yes or no.').toLowerCase();
console.log('User answer: ' + haveChildren);

if (haveChildren === 'yes' || haveChildren === 'y') {
  // console.log('Correct! Josh and his wife are expecting their first child in February');
  alert('Correct! Josh and his wife are expecting their first child in February');
  userScore++;
} else if (haveChildren === 'no' || haveChildren === 'n') {
  alert('Not quite! They are pregnant with their first child due in February.');
}
else {
  alert('Sorry, answers need to be yes or no.');
}

// Ask if Utah is Josh's home state
let homeState = prompt('Is Josh from Utah?').toLowerCase();
console.log('User answer: ' + haveChildren);

if (homeState === 'yes' || homeState === 'y') {
  //console.log('Actually, that is incorrect!');
  alert('Actually, Josh is from Arizona!');
} else if (homeState === 'no' || homeState === 'n') {
  alert('That is correct! Josh is originally from Arizona.');
  userScore++;
} else {
  alert('Sorry, answers need to be yes or no.');
}

// Ask if Josh has worked in the corporate sector
let corporateJob = prompt('Has Josh worked in the corporate sector?').toLowerCase();
console.log('User answer: ' + corporateJob);

if (corporateJob === 'yes' || corporateJob === 'y') {
  alert('That\'s right! Josh works for Zillow!');
  userScore++;
} else if (corporateJob === 'no' || corporateJob === 'n') {
  //  //console.log('Actually, that is incorrect!');
  alert('Actually, Josh does work for a civilian employer, the real estate company, Zillow!');
} else {
  alert('Sorry, answers need to be yes or no.');
}

// Ask if Josh has worked in the military
let militaryExperience = prompt('Has Josh ever served in the military?').toLowerCase();
console.log('User answer: ' + militaryExperience);

if(militaryExperience === 'yes' || militaryExperience === 'y') {
  alert('Yes! Josh also works for part-time for the National Guard.');
  userScore++;
} else if (militaryExperience === 'no' || militaryExperience === 'n') {
  //  //console.log('Actually, that is incorrect!');
  alert('Josh has actually been a part of both the Arizona and South Carolina Army National Guard.');
} else {
  alert('Sorry, answers need to be yes or no.');
}

// //Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

//Add 6th question
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



// Ask what Josh's favorite color is and alert to the number of attempts remaining
// Provide multiple correct answers and then display those answers
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

//Aggregate the number of correct questions and display how many were right
alert(`You answered ${userScore} questions correct out of 7.`);
alert(username + ', thanks for taking some time to learn about me. Have a great day!');
