// This is our main function

function fizzbuzz() {
    for (let i = 1; i < 100 + 1; i++) {
        let output = "";
        if (i % 3 === 0) {
            output += "Fizz";
        }
        if (i % 5 === 0) {
            output += "Buzz";
        }
        if (i % 7 === 0) {
            output += "Bang";
        }
        if (i % 11 === 0) {
            output = "Bong";
        }
        if (i % 13 === 0) {
            if (output.includes("B")) {
                let indexOfB = output.indexOf("B");
                output = output.slice(0, indexOfB) + "Fezz" + output.slice(indexOfB)
            } else {
                output += "Fezz";
            }
        }

        if (i % 17 === 0) {
            output = reverse(output);
        }
        if (output === "") {
            output = i
        }
        console.log(output)
    }
}

function reverse(text) {
    if (text === "") {
        return text
    }
    let reversed = ""
    let currentIndex = text.length - 4;
    while (currentIndex >= 0) {
        reversed += text.substring(currentIndex, currentIndex + 4);
        currentIndex -= 4;
    }

    return reversed
}

// Now, we run the main function:
fizzbuzz();

