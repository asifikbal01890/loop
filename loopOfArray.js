/* var number = 0;

while (number < 10) {
    console.log(number);
    number++;
} */

// for (var number = 0; number < 10;  number++) {
//     console.log(number);
// }

/* var numbers = [12, 56, 42, 50, 60, 111, 222];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
} */


/* var friends = ['sajib', 'raju', 'asif', 'jodu', 'codu', 'midhu', 'alpha'];

for(var i = 0; i < friends.length; i++){
    var friend = friends[i];
    console.log(friend);
} */


// use "break" for stop the loop

/* var numbers = [12, 56, 42, 50, 60, 111, 222, 58, 66, 42, 78];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (i > 5) {
        break;
    }
    console.log(number);
} */


// use "continue" for skip number of loop

var numbers = [12, 56, 42, 50, 60, 111, 222, 58, 66, 48, 78];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
       continue;
    }
    console.log(number);
}