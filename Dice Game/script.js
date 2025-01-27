let Newgamebtn= document.querySelector('.btn--new');
let Rolldicebtn= document.querySelector('.btn--roll');


let diceEl = document.querySelector('.dice');
let currentEl=document.querySelector('#current--0');
let current1El=document.querySelector('#current--1');
let totalscoreEl=document.querySelector('#score--0');
let totalscore1El=document.querySelector('#score--1');
let playerEl = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let currentScore = 0;
let scores=[0,0];
let activePlayer = 0 ;
let playing=true;


const newgame= function(){
    currentEl.textContent = 0;
    current1El.textContent = 0;
    totalscoreEl.textContent = 0;
    totalscore1El.textContent = 0;

    playerEl.classList.add('player--active');
    player1El.classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
};

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerEl.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  };



Rolldicebtn.addEventListener('click',function(){
    if (!playing) return alert("Please start a new game!");
    if(playing){

    dice = Math.trunc(Math.random()*6)+1;
    diceEl.src=`dice-${dice}.png`;

    if(dice !== 1){

    currentScore += dice 
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }

    else{
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
        switchPlayer();
    }
    if (scores[activePlayer] >= 100) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        alert(`Winner is Player ${activePlayer + 1}!`);
      }
}})
   


Newgamebtn.addEventListener('click',function(){
    newgame();
});
