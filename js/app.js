'use strict';
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
        alert('You\'re correct.');
        break;
    default:
        //console.log('Please write just yes or no!');
        alert('Please write just yes or no!');

}

let Favanimal= prompt('Am I love cats?');
switch (Favanimal.toUpperCase()) {
    case 'NO':
    case 'N':
        //console.log('Sorry You\'re incorrect. ');
        alert('Sorry, You\'re incorrect.');
        break;
    case 'YES':
    case 'Y':
        //console.log('You\re correct.');
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

let shape= prompt('Is the Earth flat?');
switch (shape.toUpperCase()) {
    case 'YES':
    case 'Y':
        //console.log('You\re totally correct.');
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

alert ('Thank you for joining me.');




