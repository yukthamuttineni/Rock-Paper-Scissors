const  buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const winner = document.getElementById('winner');

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');


console.log(buttons);
const choices=['paper', 'rock', 'scissors'];

let score=0;
let userChoice = undefined;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        checkWinner();
        console.log(userChoice);
    });
});
reset.addEventListener('click', () => {
    // show the selection  | hide the main
    main.style.display='flex';
    selection.style.display = 'none';
    
});
openBtn.addEventListener('click', () => {
    // show the selection  | hide the main
    modal.style.display='flex';
    
});
closeBtn.addEventListener('click', () => {
    // show the selection  | hide the main
    modal.style.display = 'none';
    
});
function checkWinner(){
    const computerChoice = pickRandomchoice();
    //upd8 the view
    updateSelection(user_select, userChoice);
    updateSelection(computer_select, computerChoice);
    if(userChoice===computerChoice){
        // draw
        winner.innerText =  'draw';
    }
    else if(userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'rock' && computerChoice==='scissors' ||
        userChoice === 'scissors' && computerChoice==='paper'){
            // user wins
            updateScore(1);
            winner.innerText =  'win';
        }
    else{
        // user loses.
        updateScore(-1);
        winner.innerText =  'lost';
    }

    //show the selection / hide main
    main.style.display='none';
    selection.style.display = 'flex';
}

function updateScore(value) {
    score+=value;
    scoreEl.innerText=score;
}


console.log(pickRandomchoice());
function pickRandomchoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function updateSelection(seletionEl, choice){
    seletionEl.classList.remove('btn-paper');
    seletionEl.classList.remove('btn-rock');
    seletionEl.classList.remove('btn-scissors');

    const img = seletionEl.querySelector('img');
    seletionEl.classList.add(`btn-${choice}`);
    img.src=`./images/icon-${choice}.svg`;
    // console.log(`choice: ${choice}`);
    img.alt=choice;
}