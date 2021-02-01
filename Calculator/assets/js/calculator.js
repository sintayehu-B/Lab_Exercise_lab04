function numberOne(){
    
    document.calculator.display.value +=1
}
function numberTwo(){
    document.calculator.display.value +=2
}
function numberThree(){
    document.calculator.display.value +=3
}
function numberFour(){
    document.calculator.display.value +=4
}
function numberFive(){
    document.calculator.display.value +=5
}
function numberSix(){
    document.calculator.display.value =6
}
function numberSeven(){
    document.calculator.display.value +=7
}
function numberEight(){
    document.calculator.display.value +=8
}
function numberNine(){
    document.calculator.display.value +=9
}
function numberZero(){
    document.calculator.display.value +=0
}
function multiplication(){
    document.calculator.display.value +="*"
}
function division(){
    
    if(document.calculator.display.value == 0){
        alert('error zero divisor')
    }else {
        document.calculator.display.value +="/"
    }
}
function subtraction(){
    document.calculator.display.value +="-"
}
function addition(){
    document.calculator.display.value +="+"
}
function clearCe(){
    document.calculator.display.value=""
}
function equalsTo(){
    
    let Display= eval(document.calculator.display.value);
    document.calculator.display.value = Display;
}
function percent(){
    let percent = eval(document.calculator.display.value / 100)
    document.calculator.display.value = percent
}

function power(){
    let power= eval(`Math.pow(document.calculator.display.value, document.calculator.display.value)`)
    document.calculator.display.value = power
}

function squareRoot(){
    let power= eval(`Math.pow(${eval(document.calculator.display.value, document.calculator.display.value)},0.5)`)
    document.calculator.display.value = power
}