function EnterTheName(){
    window.location.href="EnterTheName.html";
}
function gamepage(){

    let n=document.getElementById("name").value;
    const empty = document.getElementById("empty");
    if(n==""){
        empty.innerHTML = "Please Enter Your Name...😃";
    }
    else{
        window.location.href="gamePage.html";
    } 
}
function backtoStart(){
    window.location.href="StonePaperScissor.html";
}
let userScore = 0;
let oppoScore = 0;

const r = document.getElementById("r");
const p = document.getElementById("p");
const s = document.getElementById("s");
const reset = document.getElementById("reset");

const userScore_span = document.getElementById("user-score");
const oppoScore_span = document.getElementById("oppo-score");
const result_message = document.getElementById("result-message");

function createComputerChoice(){
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertfont(userChoice){
    if(userChoice=="r") return "✊";
    else if(userChoice=="p") return "🖐️";
    else return "✌️";
}
function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_message.innerHTML = "Congrats! You Won The Game";
    userFont.innerHTML = convertfont(userChoice);
    oppoFont.innerHTML = convertfont(compChoice);
}

function lose(userChoice, compChoice){
    oppoScore++;
    oppoScore_span.innerHTML = oppoScore;
    result_message.innerHTML = "Oops😶‍🌫️ You Lost The Game";
    userFont.innerHTML = convertfont(userChoice);
    oppoFont.innerHTML = convertfont(compChoice);
}

function draw(userChoice, compChoice){
    result_message.innerHTML = "HaHa😛 Its a draw";
    userFont.innerHTML = convertfont(userChoice);
    oppoFont.innerHTML = convertfont(compChoice);
}

function resetScore(){
    userScore = 0;
    oppoScore = 0;
    userScore_span.innerHTML = userScore;
    oppoScore_span.innerHTML = oppoScore;
    result_message.innerHTML = "Lets Start From Begining!";
}

function game(userChoice){
    const compChoice = createComputerChoice();
    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, compChoice) ;
            break ;
        default:
            draw(userChoice, compChoice)
    }
}

function main(){
    r.addEventListener('click', function(){
        game("r");
    })
    p.addEventListener('click', function(){
        game("p");
    })
    s.addEventListener('click', function(){
        game("s");
    })
    reset.addEventListener('click',function(){
        resetScore();
    })
}

main();