const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const correctmp3 = document.getElementById("correct");
const wrongmp3 = document.getElementById("wrong");

let ans = 0, f1 = 0, f2 = 0;

function equationGenerator() {
    let num1 = Math.floor(Math.random() * 11) + 1;
    let num2 = Math.floor(Math.random() * 11) + 1;


    let answers = [];
    let shuffleans = [];

    ans = num1 * num2;

    f1 = ans + Math.floor(Math.random() * 4) - 2;
    f2 = ans + Math.floor(Math.random() * 4) + 3;

    document.getElementById("number1").innerHTML = num1;
    document.getElementById("number2").innerHTML = num2;

    answers = [ans, f1, f2];

    if (ans !== f1 && f1 !== f2 && ans !== f2) {

        for (i = answers.length; i--;) {
            shuffleans.push(answers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
        }

        option1.innerHTML = shuffleans[0];
        option2.innerHTML = shuffleans[1];
        option3.innerHTML = shuffleans[2];
    }
    else {
        equationGenerator();
    }

}

option1.addEventListener('click', function () {
    if (option1.innerHTML == ans) {
        correctmp3.play();
        equationGenerator();
    }
    else {
        wrongmp3.play();
    }
});

option2.addEventListener('click', function () {
    if (option2.innerHTML == ans) {
        correctmp3.play();
        equationGenerator();
    }
    else {
        wrongmp3.play();
    }
});

option3.addEventListener('click', function () {
    if (option3.innerHTML == ans) {
        correctmp3.play();
        equationGenerator();
    }
    else {
        wrongmp3.play();
    }
});

equationGenerator();