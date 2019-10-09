//1
function numberGuess(){
    let userInput = prompt('Try and guess the random number between 1 and 10.');
    let randomNumber = Math.floor(Math.random() * 11);
    alert(Number(userInput) === randomNumber ? `You guessed it right! The number was ${randomNumber}.` : `Wrong guess, the number was ${randomNumber}.`);
}

//2
function multOrDivide(){
    alert('Welcome to multiplication or division. You will be asked to provide 2 numbers and choose between multiplication or division.');
    let num1 = prompt('Enter the first number.');
    let symbol = prompt('Enter either the / or the *');
    let num2 = prompt('Enter the second number.');
    let result = 0;
    let outputResult = true;
    switch (symbol) {
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            alert('Computation failed! Number or symbol not in correct format.');
            outputResult = false;
            result = null;
    }
    if (outputResult === true) {
        alert(`The result of your computation is ${result}`);
    }
}


//4
setInterval(movingText, 500);
function movingText()
{
    let rotatingText = document.getElementById('rotatingText');
    let text = rotatingText.innerText;
    rotatingText.innerText = text[text.length - 1] + text.substr(0, text.length-1);
    console.log(rotatingText.innerText.length)
}



//5
let today = new Date();
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDayOfWeek = daysOfWeek[today.getDay()];
let timeOfDay = 'AM';
let currentHours = today.getHours();
if (today.getHours() > 12){
    currentHours = today.getHours() - 12;
    timeOfDay = 'PM';
}
let currentMinutes = today.getMinutes().toString().length === 1 ? "0" + today.getMinutes() : today.getMinutes();
let currentSeconds = today.getSeconds().toString().length === 1 ? "0" + today.getSeconds() : today.getSeconds();
document.getElementById('currentDate').innerText = `Today is ${currentDayOfWeek}. Current Time is ${currentHours}:${currentMinutes}:${currentSeconds} ${timeOfDay}`;
