// This is our main function

function fizzbuzz() {
    let maxNumber = ``;
    const prompt = require('prompt-sync')();
    do{
        maxNumber = parseInt(prompt('Max number?'));
    } while (invalidInput(maxNumber));
    let rulesInput = prompt("Please input the numbers you want to use separated by a comma");
    let rules = parseArray(rulesInput);
    rules = rules.sort((n1,n2) => n1 - n2);
    for (let i = 1; i < maxNumber + 1; i++) {
        let output = ``;
        rules.forEach(rule => {
            if( i % rule === 0){
                output = applyRule(rule, output);
            }
        })
        if (output === ""){
            output = i;
        }
        console.log(output);
    }
}

function invalidInput(input){
    return isNaN(input) || input <=0;
}
function reverse(text) {
    if (text === "") {
        return text;
    }
    let reversed = "";
    let currentIndex = text.length - 4;
    while (currentIndex >= 0) {
        reversed += text.substring(currentIndex, currentIndex + 4);
        currentIndex -= 4;
    }
    return reversed;
}
function applyRule(rule, output) {
    switch (rule){
        case 3:
            output += "Fizz";
            break;
        case 5:
            output += "Buzz";
            break;
        case 7:
            output += "Bang";
            break;
        case 11:
            output = "Bong";
            break;
        case 13:
            if (output.includes("B")) {
                let indexOfB = output.indexOf("B");
                output = output.slice(0, indexOfB) + "Fezz" + output.slice(indexOfB);
            } else {
                output += "Fezz";
            }
            break;
        case 17:
            output = reverse(output);
            break;
    }
    return output;
}

function parseArray(input){
    let rules = []
    let number = ``;
    for (let i = 0; i < input.length; i++) {
        let currentChar = input.substring(i, i+1)
        if(currentChar === `,`){
            rules.push(parseInt(number));
            number = ``;
        }
        else {
            number += currentChar;
        }
    }
    rules.push(parseInt(number));
    return rules;
}
// Now, we run the main function:
fizzbuzz();

