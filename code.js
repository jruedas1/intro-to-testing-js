// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }
//

const helloWorld = function(){
    return "Hello, World!";
}

function sayHello(input){
    if (typeof input === "string"){
        return "Hello, " + input;
    } else if (input === true) {
        return "Hello, World!";
    } else {
        return "Hello.";
    }
}

function isFive(input){
   return input === 5;
}

function isEven(num){
    return num % 2 === 0;
}

function isVowel(letter){
    if (typeof letter === 'string'){
        letter = letter.toLowerCase();
        return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
    } else {
        return false;
    }
}

function add(num1, num2){
    return Number(num1) + Number(num2);
}