// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

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