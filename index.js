document.getElementsByTagName("button")[0].addEventListener("click", checkGuess);

function checkGuess() {
    let userInput = document.getElementsByTagName("input")[0].value;
    let number = parseInt(userInput);
    firstCheck(number);
    secondCheck(number);
    thirdCheck(number);
    fourthCheck(number);
    fifthCheck(number);
}

function firstCheck(number, output) {
    if(isNaN(number) == true) {
        console.log("Please enter a 5-digit number");
    }
    else if(number.toString().length == 5) {
        console.log("The number passes the first check");
    } else {
        console.log("The number is less than or greater than 5 digits");
    }
}

function secondCheck(number) {
    number = number.toString();
    let fourthNumber = parseInt(number.substring(3,4));
    let secondNumber = parseInt(number.substring(1,2));
    if((fourthNumber-4)==secondNumber){
        console.log("The second check passed!")
    } else {
        console.log("The 4th digit is not 4 more than the 2nd one")
    }
}

function thirdCheck(number) {
    number = number.toString();
    let thirdNumber = parseInt(number.substring(2,3));
    let secondNumber = parseInt(number.substring(1,2));
    if((thirdNumber+3)==secondNumber){
        console.log("The third check passed!");
    } else {
        console.log("The 3rd digit is not 3 less than the 2nd one")
    }
}

function fourthCheck(number) {
    number = number.toString();
    let firstNumber = parseInt(number.substring(1,0));
    let fifthNumber = parseInt(number.substring(5,4));
    if((firstNumber/3)==fifthNumber) {
        console.log("The fourth check passed!")
    } else {
        console.log("The 1st digit is not three times the 5th digit")
    }
}

function fifthCheck(number) {
    number = number.toString();
    const sum = 11;
    let count = 0;
    for(let i = 0; i < number.length; i++) {
        let numberOne = parseInt(number.substring(i+1, i));
        for(let x = 1; x < number.length; x++) {
            let numberTwo = parseInt(number.substring(x, x+1));
            if((numberOne+numberTwo)==sum)
            {
                count++;            
                if(count==3)
                {
                    console.log("The number has passed the fifth check");
                    return;
                }
            }
        }
    }
    if(count != 3) {
        console.log("Three pairs of digits never sum up to 11")
    }
}

