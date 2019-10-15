let gamecount = 0
let goalcount = Math.floor(Math.random()*100)
console.log(goalcount);
let gameover = false;

$ = function(){
    return document.querySelector();
}

document.querySelector(".blue").addEventListener("click", function(){
    OnClick(7);
});

document.querySelector(".red").addEventListener("click", function(){
    OnClick(1);
});

document.querySelector(".gold").addEventListener("click", function(){
    OnClick(4);
});

document.querySelector(".green").addEventListener("click", function(){
    OnClick(2);
});

function OnClick(amount){
    let win = false;
    if(!gameover){
        gamecount += amount;
        difference = goalcount - gamecount;
        console.log(`gamecount: ${gamecount} goalcount: ${goalcount} difference: ${difference}`);
        document.querySelector(".gamecount").textContent = gamecount;
        document.querySelector(".goalcount").textContent = goalcount;
        document.querySelector(".difference").textContent = difference;
        if(difference == 0){
            console.log("win");
            win = true;
            gameover = true;
        }
        if (difference < 0){
            console.log("you lost");
            gameover = true;
        }
        if(gameover){
            document.querySelector(".gold").classList.add("grey");
            document.querySelector(".blue").classList.add("grey");
            document.querySelector(".green").classList.add("grey");
            document.querySelector(".red").classList.add("grey");
            if(!win){
                document.querySelector(".score").textContent = "GAME OVER"
            }
            else{
                document.querySelector(".score").textContent = "YOU WIN"
            }
        }

    }


}