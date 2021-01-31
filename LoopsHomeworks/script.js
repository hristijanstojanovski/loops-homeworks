console.log("Loops homeworks");

console.log("Homework 1");

/*Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC!"*/

let string = ["Hello","homework", "checker,", "what", "do", "you", "think of this homework?"];
let string2 ="";

for (let i=0; i<string.length; i++) {
    string2 += string[i] + " ";
};
console.log(string2);

/* Title: Looping structures

Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space. */

let s = ""
for (let i = 1; i <= 20; i++) {
    if(i % 2 === 0){
        console.log(s +=i + "\n")

    } else
    console.log(s += i +" ")
    
}

console.log("Ne e zavrsena");

/*Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it*/

let array12 = [4, 18, 39, 50, 68, 70, 150];

function sumMinMax (array) {
    let min = Infinity;
    let max = -Infinity;
    
    for(let number of array) {
        if(number > max) {
            max = number
        }
        if(number < min) {
            min = number
        }
    }
    return `Max: ${max}, Min: ${min}, Sum: ${max - min}`
}
console.log(sumMinMax(array12));

/*Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]*/

let firstName = ["Billie", "Steve", "Alicia", "Penelope"];
let lastName = ["Stankoski", "Borkoski", "Petrovska", "Markoska"];
let number11 = ["1.", "2.", "3.", "4."];

function firstAndLast () {
    let fullNames = [];
    for (let i=0; i<firstName.length; i++) {
        fullNames.push(number11[i] + firstName[i] + " " + lastName[i]);
    }
    return fullNames
}
console.log(firstAndLast(firstName, lastName, number11));
// ne mi teknuva nikako kodot za reden broj da se stavi i ne mozev da go najdam, a i znam deka imam greska so zadacava, u console ne mi gi dava ko so treba ama i toa ne znam kako da go sredam :)




