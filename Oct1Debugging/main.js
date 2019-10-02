let qa = [
    ["If a variable is used before it is initialized with a value, you get a ___ error." , "undefined"]
];
let healthNum = 100;
let currentQuestionIndex = Math.floor(Math.random() * qa.length);
let question = document.getElementById('question');
question.innerText = qa[currentQuestionIndex][0];
function checkAnswer(){
    if (qa[currentQuestionIndex][1] !== document.getElementById('answer').value)
    {
        let health = document.getElementById('health');
        if (health < 20){
            health.style.width = "0%";
        }
        else{
            healthNum -= 20;
            health.style.width = healthNum + "%";
        }
    }
}