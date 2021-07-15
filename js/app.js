'use strict';

// get the user's name so we can greet them
let username = prompt('What is your name?');

alert('Hello ' + username + '! Here are some questions about me!');


// Ask if Josh went to college
let collegeAttendance = prompt('Did Josh attend college? Answer yes or no.').toLowerCase();
console.log('User answer: ' + collegeAttendance);

if (collegeAttendance === 'yes' || collegeAttendance === 'y' ) {
  // console.log('Correct! Josh attended college at Brigham Young University.');
  alert('Correct! Josh attended college at Brigham Young University.');
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
} else {
  alert('Sorry, answers need to be yes or no.');
}

// Ask if Josh has worked in the corporate sector
let corporateJob = prompt('Has Josh worked in the corporate sector?').toLowerCase();
console.log('User answer: ' + corporateJob);

if (corporateJob === 'yes' || corporateJob === 'y') {
  alert('That\'s right! Josh works for Zillow!');
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
} else if (militaryExperience === 'no' || militaryExperience === 'n') {
  //  //console.log('Actually, that is incorrect!');
  alert('Josh has actually been a part of both the Arizona and South Carolina Army National Guard.');
} else {
  alert('Sorry, answers need to be yes or no.');
}


alert(username + ', thanks for taking some time to learn about me. Have a great day!');
