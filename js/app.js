'use strict';
alert('Let\'s play a game!! the answer will be y/n');
// Question 1

let userInputName = prompt('Do you think my name is Nour Eddein??');
if (userInputName.toLowerCase() === 'y' || userInputName.toLowerCase() === 'yes') {
    alert('You are Correct!!');
} else {
    alert('Sorry! you are WRONG :(');
}
// console.log('The Answer is YES');

// Question 2
let userInputAge = prompt('The author age is 30 year? ');

if (userInputAge.toLowerCase() === 'n' || userInputAge.toLowerCase() === 'no') {
    alert('You are Correct!!');
} else {
    alert('Sorry! you are WRONG :(');
}
// console.log('The Answer is NO');
// Question 3
let userInputWork = prompt('Does I work for 1 year in developer field?');
if (userInputWork.toLowerCase() === 'n' || userInputWork.toLowerCase() === 'no') {
    alert('You are Correct!!');
} else {
    alert('Sorry! you are WRONG :(');
}
// console.log('The Answer is NO');

// Question 4
let userInputNationality = prompt('Do you think I\'m Jordanian');
if (userInputNationality.toLowerCase() === 'y' || userInputNationality.toLowerCase() === 'yes') {
    alert('You are Correct!!');
} else {
    alert('Sorry! you are WRONG :(');
}
// console.log('The Answer is YES');

// Question 5
let userInputPlace = prompt('Does I live in KSA?');
if (userInputPlace.toLowerCase() === 'n' || userInputPlace.toLowerCase() === 'no') {
    alert('You are Correct!!');
} else {
    alert('Sorry! you are WRONG :(');
}
// console.log('The Answer is NO');

let userName = prompt('What is your name please?');
alert('Hello ' + userName);
document.getElementById('userName').innerHTML = userName.toLocaleUpperCase();