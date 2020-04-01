

function getInputValue() {

    var personWeight = document.getElementById("weight").value;

    var personHeight = document.getElementById("height").value;

    var BMI = personWeight / ( personHeight * personHeight ) * 10000;

    BMI = Math.round(BMI);


    if ( BMI < 18) {
        document.getElementById("result").innerHTML = 'BMI Score ' + BMI;
        document.getElementById("note").innerHTML = 'Underweight';

    } else if ( BMI >= 18 && BMI < 25) {
        document.getElementById("result").innerHTML = 'BMI Score ' + BMI;
        document.getElementById("note").innerHTML = 'Congrats, perfect weight';
    } else if ( BMI >= 25 && BMI < 30) {
        document.getElementById("result").innerHTML = 'BMI Score ' + BMI;
        document.getElementById("note").innerHTML = 'Overweight';
    } else {
        document.getElementById("result").innerHTML = 'BMI Score ' + BMI;
        document.getElementById("note").innerHTML = 'Obese';
    }

    
}