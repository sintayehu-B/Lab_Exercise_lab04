
let person={
    firstName : "",
    surName : "",
    job : "",
    birthYear : '',
    age: '',
    tempAge: "",
    weight: '',
    height: '',
    isEligibleToVote : false,
    familyMember: [],
    
    calcAge: function(birthYear)
    {
        return new Date().getFullYear() - birthYear;

    },
    
    checkVote: function(){
        // let tempAge = this.ageCalc(Number(this.birthYear));
        if (this.age >= 18) {
            isEligibleToVote = true;
        } 
        else {
            isEligibleToVote = false;
        }
    },
    calcBmi : function() {
        
        let bmi = this.weight / (this.height * this.height);
    
    
        
    
        console.log("Your Bmi is : " +Number(bmi));
        if (bmi < 18.5)
            console.log("Your are : Underweight");
        else if (bmi >= 18.5 && bmi <= 24.9)
            console.log("Your are : Normal");
        else if (bmi >= 25.0 && bmi <= 29.9)
            console.log("Your are : Overweight");
        else if (bmi >= 30.0)
            console.log("Your are : Obese");
    
    
    }

};

person.firstName = prompt("FirstNAme");
person.surName = prompt('SurName');
person.age = prompt("Age");
person.job = prompt('job');
person.weight = prompt('Weight');
person.height = prompt('Height');
person.birthYear = prompt("Enter Your Birth Year");
let numberOfFamily = prompt("Number of Family  ? ");

//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    person.familyMember[i] = prompt("Your Family  Members " + (i + 1));
}
person.calcAge();
person.checkVote();


(function(){

    console.log("Is Eligible to Vote : " + isEligibleToVote);
    console.log("Here is your Profile ")
    console.log("Full Name: " + person.firstName + " "+person.surName);
    console.log("Profession : " + person.job);
    console.log("Age : " + person.age + " " + "years old");
    console.log('weight ' + person.weight +  ', ' + person.height);
    
    console.log("Family Members ");
    //Displaying the family member with foreach
    person.familyMember.forEach(function(member, index) {
    console.log("Family Member  " + (index + 1) + " : " + member)});

    person.calcBmi();
}) ();





   