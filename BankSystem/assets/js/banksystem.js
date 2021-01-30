let customer_1 = {
    firstName: 'sintayehu',
    accountNumber: '098765432',
    balanceEntry: 20_000_000_000,
    id: 12
} 

let customer_2 = {
    firstName: 'sermessa',
    accountNumber: '1234567',
    balanceEntry: 20_000,
    id: 13
}
// display method
function displayAccounts(){
    let choose = Number(prompt('choose the account you own to check your info \n 1 for customer_1 and \n 2 for customer_2'));
    if(choose == 1){
        let id = prompt('Enter a id to display your account info: ')
        if(id == customer_1.id){
            alert('you have successfully enter your id Welcome back sir '+  customer_1.firstName + "\n" +customer_1.accountNumber + "\n" + customer_1.balanceEntry);
        }else {
            alert('you are not the own or you put the wrong id ')
        }
    }else if(choose == 2){
        let id = prompt('Enter a id to display your account info: ')
        if(id == customer_2.id){
            alert('you have successfully enter your id Welcome back sir '+ customer_2.firstName + "\n" +customer_2.accountNumber + "\n" + customer_2.balanceEntry);
        }else {
            alert('you are not the own or you put the wrong id ')
        }
    }else{
        alert('Wrong input')
    
    }
}


// deposit method
function deposit(){
    let amount = parseFloat(prompt('Enter the amount to deposit please: '));
    let result;
    if(amount > 0){
        
        let choose = Number(prompt('choose the account to want to deposit to \n 1 for customer_1 and \n 2 for customer_2'));
        if(choose == 1){
            result = amount + customer_1.balanceEntry;
            alert('YOU HAVE DEPOSITED: ' + amount + " birr To your account");
        }else{
            result = customer_2.balanceEntry + amount;
            alert('YOU HAVE DEPOSITED: ' + amount + "To your account");
        }
        console.log(result);
    }
    
    
}
// withdrawal method
function withdraw(){
    let amount = parseFloat(prompt('Enter the amount you want to withdraw please: '));
    let result;
    if(amount => 50 && amount<=5_000){
        
        let choose = Number(prompt('choose the account to want to make withdrawal from \n 1 for customer_1 and \n 2 for customer_2'));
        if(choose == 1){
            result =customer_1.balanceEntry- amount ;
            alert('YOU HAVE made a withdrawal: ' + amount + " birr To your account");
        }else{
            result = customer_2.balanceEntry - amount;
            alert('YOU HAVE made withdrawal of: ' + amount + "To your account");
        }
        console.log(result);
    }else{

    }
}
// checking for balance
function balance(){
    let choose = Number(prompt('choose the account for checking balance \n 1 for customer_1 and \n 2 for customer_2'));
    let result;
    if(choose == 1){
        result =customer_1.balanceEntry;
        alert('YOU HAVE this balance: ' + result + " In your account");
    }else{
        result = customer_2.balanceEntry;
        alert('YOU HAVE this balance: ' + result + " In your account");
    }
    
}
// transfer method
function transfer(){
    let amount = parseFloat(prompt('Enter the amount you want to transfer please: '));
    let result;
    let result2;
    let choose = Number(prompt('choose the account for checking balance \n 1 for customer_1 and \n 2 for customer_2'));
    if(choose == 1){
        if(customer_1.balanceEntry - amount <= 50 ){
            alert("Your balance is insufficient can't make a transfer");
        }else {
            result= customer_1.balanceEntry - amount;
            result2 = customer_2.balanceEntry + amount;
            alert('Your transfer successfully transacted to  ' + customer_2.firstName + " the amount is " + amount)
            }
        }
    else{
        if(customer_2.balanceEntry - amount <= 50 ){

            alert("Your balance is insufficient can't make a transfer");
        }else {
            result= customer_2.balanceEntry - amount;
            result2 = customer_1.balanceEntry + amount;
            alert('Your transfer successfully transacted to  ' + customer_1.firstName + " the amount is " + amount)
            }
    }
}



// invoking function
(function(){
    let isFinished = true;
    while(isFinished){
        let choose = Number(prompt('choose the option below \n 1.Balance \n 2. Deposit \n 3. Withdrawal \n 4. Transfer \n 5. DisplayAccount'));
        switch(choose){
            case 1 : balance();
            break;
            case 2: deposit();
            break;
            case 3: withdraw();
            break;
            case 4: transfer();
            break;
            case 5: displayAccounts();
            break;
            default: isFinished = false;
            break;
            
    } 
}

})();
