'use strict';
function run(){
let score = 0;
let userName = prompt('Hello, What\'s your name?')
console.log(userName);
alert('Hi ' + userName + ", let's have fun with playing a guessing game!")

function firstQ(params) {

    let height = prompt('Am I tall?');
    switch (height.toUpperCase()) {
        case 'YES':
        case 'Y':

            alert('Sorry, You\'re incorrect');
            break;
        case 'NO':
        case 'N':

            score++;
            alert('You\'re correct.');
            break;
        default:

            alert('Please write just yes or no!');

    }
}
firstQ();

function Q2(params) {

    let Favanimal = prompt('Am I love cats?');
    switch (Favanimal.toUpperCase()) {
        case 'NO':
        case 'N':

            alert('Sorry, You\'re incorrect.');
            break;
        case 'YES':
        case 'Y':

            score++;
            alert('You\'re correct.');
            break;
        default:

            alert('Please write just yes or no!');
    }
}
Q2();

function Q3(params) {

    let feeling = prompt('Am I love NASA?');
    switch (feeling.toUpperCase()) {
        case 'NO':
        case 'N':

            score++;
            alert('You\'re totally correct.');
            break;
        case 'YES':
        case 'Y':

            alert('Sorry, You\'re incorrect.');
            break;
        default:

            alert('Please write just yes or no!');
    }
}
Q3();
function Q4(params) {

    let shape = prompt('Is the Earth flat?');
    switch (shape.toUpperCase()) {
        case 'YES':
        case 'Y':

            score++;
            alert('You\'re totally correct.');
            break;
        case 'NO':
        case 'N':

            alert('You\'re correct, but not for this question lol');
            break;
        default:

            alert('Please write just yes or no!');
    }
}
Q4();
function Q5(params) {

    let size = prompt('Is the Sun bigger than Earth?');
    switch (size.toUpperCase()) {
        case 'NO':
        case 'N':

            score++;
            alert('You\'re totally correct.');
            break;
        case 'YES':
        case 'Y':

            alert('Sorry, I\'m afraid not.');
            break;
        default:

            alert('Please write just yes or no!');
    }
}
Q5();

function Q6(params) {

    let correctNumber = 7;

    for (let i = 0; i < 4; i++) {

        let myNum = prompt('guess what is my favorite number betwee 1-10 ?');

        myNum = parseInt(myNum)

        console.log(typeof myNum);

        if (myNum === correctNumber) {
            alert('good job');
            score++;
            break;
        } else if (myNum > correctNumber) {
            alert('too high');
        } else if (myNum < correctNumber) {
            alert('too low');
        } else {
            alert('please input a number');
        }

        if (i == 3) {
            alert('My favorite number is ' + correctNumber);
        }
    }
}
Q6();

function Q7(params) {

    let movies = ['the godfather', 'shotter island', 'inception', 'interstellar', 'TENT']
    let correct = false;

    for (let i = 0; i < 6; i++) {

        let question7 = prompt('whats my favourite movie?')

        for (let j = 0; j < movies.length; j++) {

            if (question7 == movies[j]) {
                alert('good job');
                i = 7;
                score++


                break;
            }
        }

    }

    alert(`my favourite movies are ${movies} `);
}
Q7();


alert(`Thank you "for" joining me, you got  ${score}  out of 7 `);
}

