// returns the history value
function getHistory(){
    return document.getElementById('history-value').innerText;

}
// alert(getHistory())
// prints history
function printHistory(num){
    document.getElementById('history-value').innerText=num;

}
// printHistory("9 * 9 + 81");
// returns the output of the value
function getOutput(){
    return document.getElementById('output-value').innerText;
}
// alert(getOutput());

// prints the output 
function printOutput(num){
    if (num == "") {
        document.getElementById('output-value').innerText = num
    }else{
        document.getElementById('output-value').innerText = 
        getFormattedNumber(num);
    }
}

// Reads the number and returns coma separated number 
function getFormattedNumber(num){

    if (num == "-") {
        return ""
        
    }
    let number = Number(num);
    let value = number.toLocaleString("en")
    return value
}
// printOutput("45333333333333")

//  reverse number format
function reversNumberFormat(num){
    return Number(num.replace(/,/g, ''))
}
// alert(reversNumberFormat(getOutput()))

var operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function(){
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        else if (this.id == "backspace") {
            let output = reversNumberFormat(getOutput()).toString();
            if(output){
                output = output.substr(0, output.length - 1)
                printOutput(output);
            }
        }else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
                output= output==""?
                output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
        }
    })
    
}
var number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(){
        let output = reversNumberFormat(getOutput());
        if(output != NaN){
            output = output + this.id
            printOutput(output);
            
        }
    })
    
}