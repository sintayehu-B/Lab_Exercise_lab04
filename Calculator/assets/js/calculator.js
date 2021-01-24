function subtraction(){
    let number1 = prompt('the first Number ');
    let number2 = prompt('the Second Number');
    
    let subtract = number1 - number2;

    return subtract;

}

function division(){
    let number1 = prompt('The first number');
    let number2 = prompt('The second number');
    if (number1 <= 0 ) {
        console.log("Can't be divided by zero");
    }else{
        
        let divide = number1 / number2;
        
        return divide;
    }

    
}

function square(){
    let number = prompt("a number to square: ")
    return number * number;
}

function addition(){
    let inputNumber = [];
    let input = prompt('how many number to add');
    result = 0;
    for (let i = 0; i < parseInt(input); i++) {
        inputNumber[i] = prompt(" the number " + (i + 1));
    }
    
    for(i in inputNumber){
        result += parseInt(inputNumber[i])
    }
    return result

    
}
function multiplication(){
    let inputNumber = [];
    let input = prompt('how many number to add');
    result = 1;
    for (let i = 0; i < parseInt(input); i++) {
        inputNumber[i] = prompt(" the number " + (i + 1));
    }
    console.log(inputNumber);
    for(i in inputNumber){
        result *= parseInt(inputNumber[i])
    }
    return result

    
}
(function invoke(){
    let choice = parseInt(prompt('choose between the 5 functions \n 1 for Addition, \n  2 for subtraction, \n  3.for division, \n  4 for multiplication \n and 5 for squaring'))  ;
    switch(choice){
        case 1: console.log(addition());
        break;
        case 2: console.log(subtraction());
        break;
        case 3: console.log(division());
        break;
        case 4: console.log(multiplication());
        break;
        case 5: console.log(square());
        break;
        default: console.log('Wrong input try to insert 1-5 please');
        invoke();
        
    }
})();

    
