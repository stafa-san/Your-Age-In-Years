//prompt("What's your name");

function AgeInYears() {
    var Question = prompt("Which year were you born ?");
    var Calculation = 2021 - Question;
    var textAnswer = document.createTextNode('You are ' + Calculation + ' years old.');
    var display = document.createElement('h1');
    display.setAttribute('id','Calculation');
    display.appendChild(textAnswer);
    document.getElementById('AgeResult').appendChild(display);

    //  console.log(Calculation);
}

function reset() {
    document.getElementById('Calculation').remove();
}