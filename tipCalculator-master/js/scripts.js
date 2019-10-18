//Function activated on button press
//We're passing an anonymous function (a function without a name to the button press)



function calculateTip() {

    var billAmount = document.getElementById("bill").value;
    var serviceQuality = document.getElementById("serviceQual").value;
    var amountOfPeople = document.getElementById("peopleNum").value;
    // var amount = Number(billAmount); //Try to turn billAmount into number
    var people = Number(amountOfPeople); //Try to convert amountOfPeople into number

    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Invalid input for bill amount.");
        return;
    }
    
    if (isNaN(people) || people < 1) {
        alert("Invalid input for amount of people splitting the bill");
        return;
    }
    


    var tipPerPerson = (billAmount * serviceQuality) / people;

    tipPerPerson = tipPerPerson.toFixed(2);

    console.log(tipPerPerson);
    console.log(billAmount);
    console.log(serviceQuality);
    console.log(amountOfPeople);

    document.getElementById("tip").innerText = tipPerPerson;
}

function reset() {
    document.getElementById("bill").innerText = "";
    document.getElementById("serviceQuality").innerText = 0;
    document.getElementById("numPeople").innerText = ""; 
}


document.getElementById("calculateTip").onclick = function() {
    calculateTip();
}



