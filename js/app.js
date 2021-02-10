'use strict';
let score = 0;
let userName = prompt('Hello, What\'s your name?')
console.log(userName);
alert('Hi ' + userName + ", let's have fun with playing a guessing game!")

let height = prompt('Am I tall?');
switch (height.toUpperCase()) {
    case 'YES':
    case 'Y':
        //console.log('Sorry, You\'re incorrect.');
        alert('Sorry, You\'re incorrect');
        break;
    case 'NO':
    case 'N':
        //console.log('You\re correct.');
        score++;
        alert('You\'re correct.');
        break;
    default:
        //console.log('Please write just yes or no!');
        alert('Please write just yes or no!');

}

let Favanimal = prompt('Am I love cats?');
switch (Favanimal.toUpperCase()) {
    case 'NO':
    case 'N':
        //console.log('Sorry You\'re incorrect. ');
        alert('Sorry, You\'re incorrect.');
        break;
    case 'YES':
    case 'Y':
        //console.log('You\re correct.');
        score++;
        alert('You\'re correct.');
        break;
    default:
        //console.log('Please write just yes or no!');
        alert('Please write just yes or no!');
}

let feeling = prompt('Am I love NASA?');
switch (feeling.toUpperCase()) {
    case 'NO':
    case 'N':
        //console.log('You\re totally correct.');
        score++;
        alert('You\'re totally correct.');
        break;
    case 'YES':
    case 'Y':
        //console.log('Sorry You\'re incorrect. ');
        alert('Sorry, You\'re incorrect.');
        break;
    default:
        //console.log('Please write just yes or no!');
        alert('Please write just yes or no!');
}

let shape = prompt('Is the Earth flat?');
switch (shape.toUpperCase()) {
    case 'YES':
    case 'Y':
        //console.log('You\re totally correct.');
        score++;
        alert('You\'re totally correct.');
        break;
    case 'NO':
    case 'N':
        //console.log('You\'re correct, but not for this question lol');
        alert('You\'re correct, but not for this question lol');
        break;
    default:
        //console.log('Please write just yes or no!');
        alert('Please write just yes or no!');
}

let size = prompt('Is the Sun bigger than Earth?');
switch (size.toUpperCase()) {
    case 'NO':
    case 'N':
        //console.log('You\re totally correct.');
        score++;
        alert('You\'re totally correct.');
        break;
    case 'YES':
    case 'Y':
        //console.log('Sorry, I\'m afraid not. ');
        alert('Sorry, I\'m afraid not.');
        break;
    default:
        //console.log('Please write just yes or no!');
        alert('Please write just yes or no!');
}




let correctNumber = 6;

for (let i = 0; i < 4; i++) {

    let question6 = prompt('guess a number betwee 1-10');
    // the prompt will always give us a string

    //  '6'===6 => value and datatype
    // '6'==6 => value
    question6 = parseInt(question6)

    console.log(typeof question6);

    if (question6 === correctNumber) {
        alert('good job');
        score++;
        break;
    } else if (question6 > correctNumber) {
        alert('too high');
    } else if (question6 < correctNumber) {
        alert('too low');
    } else {
        alert('please input a number');
    }
    // i = 0 
    // i = 1
    // i = 2
    // i = 3
    if (i == 3) {
        alert('the correct number is ' + correctNumber);
    }
}

let movies = ['the godfather', 'harry potter', 'inception', 'interstellar', 'TENT']
let correct = false;

for (let i = 0; i < 6; i++) {

    let question7 = prompt('whats my favourite movie?')

    for (let j = 0; j < movies.length; j++) {

        if (question7 == movies[j]) {
            alert('good job');
            i = 7;
            score++

            // correct = true;
            break;
        }
    }
    // if (correct) {
    //     break;
    // }
}

alert(`my favourite movies are ${movies} `);

// for(let i=0; i<3;i++){
//     console.log('inside first loop',i);
//     // i=0
//     // i=1
//     for(let j = 0 ; j<5 ; j++){
//         // j=0
//         // j=1
//         // ...
//         console.log('inside second loop', j);
//     }
// }


alert(`Thank you "for" joining me, you got  ${score}  out of 7 `);

