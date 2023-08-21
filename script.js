

var timer = 6;
var timerInt ;
var score = 0;
var randomHit;





function bubble(){

    var bubbleNumbers = new Set();
    
    var bubbles = 100

    if(window.innerWidth < 700){
        bubbles = 42;
    }

    
    while (bubbleNumbers.size < 10) {
        bubbleNumbers.clear(); 
        var clutter = ""; 

    for(i = 1; i <= bubbles; i++){
      var random =  Math.floor(Math.random() * 10);
      bubbleNumbers.add(random);
        clutter += `
        <div class="bubble">
        <div class="bubble-content">${random}</div>
        </div>
        `
    };

};
    document.querySelector(".pbtm").innerHTML = clutter;


}

function timerz(){
    
   timerInt =  setInterval(function() {
        

        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".pbtm").innerHTML =
            `
            <div class="game-div">
            <div class="game-title">Game Over</div>
            <div class="game-score">Score: ${score}</div>
            <button class="res-btn" onclick="restartGame()">Restart</button>
            </div>
            `
        }
    }, 1000);

    
};



function getNewHit(){

    randomHit = Math.floor(Math.random() *10)
    document.querySelector("#hitVal").textContent = randomHit;
}

function incScore(){

    score += 10;
    document.querySelector("#scoreVal").textContent = score;

};

function decScore(){

    score -= 1;
    document.querySelector("#scoreVal").textContent = score;
};


document.querySelector(".pbtm").
addEventListener('click',function(event){

    var clickedBubble = event.target.closest(".bubble")
 console.log(clickedBubble);
if(clickedBubble){
    var hit = Number(clickedBubble.querySelector(".bubble-content").innerHTML);
    // console.log(hit);
    
    if(hit === randomHit){
        incScore();
        bubble();
        getNewHit();
    }
    else {
        decScore();

        clickedBubble.style.backgroundColor = "rgb(200, 30, 20)"

        setTimeout(function(){
            clickedBubble.style.backgroundColor = "rgb(9, 9, 61)"
            clickedBubble.style.transition = "background-color 0.5s ease";

        }, 200)

    }
}

  
})


function startNewGame(){

    getNewHit();
    timerz();
    bubble();
}

function restartGame(){
    // document.querySelector(".pbtm").innerHTML = "";
    document.querySelector("#scoreVal").textContent = 0;
    document.querySelector("#timerVal").textContent = 60;
    timer = 60;
    score = 0;
    startNewGame();
}
// incScore(); 




