'use strict';
// Question 1
function guessGame() {
    let score = 0;
    alert('Let\'s play a game!! the answer will be y/n');
    let userInputName = prompt('Do you think my name is Nour Eddein??');
    if (userInputName.toLowerCase() === 'y' || userInputName.toLowerCase() === 'yes') {
        alert('You are Correct!!');
        score = score + 1;
    } else {
        alert('Sorry! you are WRONG :(');
    }
    // console.log('The Answer is YES');



    // Question 2
    let userInputAge = prompt('The author age is 30 year? ');

    if (userInputAge.toLowerCase() === 'n' || userInputAge.toLowerCase() === 'no') {
        alert('You are Correct!!');
        score = score + 1;
    } else {
        alert('Sorry! you are WRONG :(');
    }
    // console.log('The Answer is NO');
    // Question 3
    let userInputWork = prompt('Does I work for 1 year in developer field?');
    if (userInputWork.toLowerCase() === 'n' || userInputWork.toLowerCase() === 'no') {
        alert('You are Correct!!');
        score = score + 1;
    } else {
        alert('Sorry! you are WRONG :(');
    }
    // console.log('The Answer is NO');

    // Question 4
    let userInputNationality = prompt('Do you think I\'m Jordanian');
    if (userInputNationality.toLowerCase() === 'y' || userInputNationality.toLowerCase() === 'yes') {
        alert('You are Correct!!');
        score = score + 1;
    } else {
        alert('Sorry! you are WRONG :(');
    }
    // console.log('The Answer is YES');

    // Question 5
    let userInputPlace = prompt('Does I live in KSA?');
    if (userInputPlace.toLowerCase() === 'n' || userInputPlace.toLowerCase() === 'no') {
        alert('You are Correct!!');
        score = score + 1;

    } else {
        alert('Sorry! you are WRONG :(');
    }
    // console.log('The Answer is NO');

    let userName = prompt('What is your name please?');
    alert('Hello ' + userName);
    document.getElementById('userName').innerHTML = userName.toLocaleUpperCase();
    console.log(score);
    document.getElementById('totalScore').innerHTML = ('You got: ' + score + ' out of 5');
    return score;
}


//Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.

function guessNumber() {
    let attempts = 4;
    let userInputs = prompt('try to guess the number?You Only have 4 attempts!!');
    while (attempts) {
        for (let i = 0; i < 3; i++) {
            if (userInputs > '5') {
                alert('You are too high!');
                break;
            } else if (userInputs < 5) {
                alert('You are too low!');
                break;
            } else if (userInputs === '5') {
                alert('you are Correct!!');
                break;
            } else {
                alert('You are Wrong!!');
                break;
            }
        }

        attempts -= 1;
        if (userInputs === '5') {
            break;
        }

        userInputs = prompt('Please try again you have: ' + attempts + ' Only');
    }
    if (userInputs !== '5') {
        alert('You are NOT Lucky Tody! ');
        alert('The correct answer was 5 !Good Luck! ');
    }


}

function guessPlace() {
    let arrPlaces = ['Paris', 'Bora Bora', 'Tokyo'];
    let userInput = prompt('Can you guess my favorite places? ');
    var correct1 = false;
    let correct2 = true;
    for (let i = 6; i > 1; i--) {
        for (let j = 0; j < arrPlaces.length; j++) {
            if (userInput.toLowerCase() === arrPlaces[j].toLowerCase()) {
                alert('you are correct!');
                correct1 = true;
                break;

            }
        }
        if (correct2 === correct1) {
            break;
        }
        userInput = prompt('Can you guess my favorite places? ');



    }
    if (correct1 !== correct2) {
        alert('You are NOT Lucky Tody! ');
        alert('The correct answer was one of those Paris, Bora Bora, Tokyo !Good Luck! ');
    }
}