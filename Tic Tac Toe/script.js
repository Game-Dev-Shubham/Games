const buttons = document.querySelectorAll("#btn");
const popup = document.getElementById("popup");
const result = document.getElementById("winnerText");
const restartBtn = document.getElementById("restartBtn");

let turn = "X";
let gameOver = false;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6]
];

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    play(button, index);
  });
});

function play(button){

  button.disabled = true;

  button.innerText = turn;
  
  if(checkWin()){
    return;
  }
 checkDraw();
  turn = (turn == "X") ? "O" : "X";
}

function checkWin(){
  for (var i in winPattern){
    let pattern = winPattern[i];
    let a = pattern[0];
    let b = pattern[1];
    let c = pattern[2];
    
    
    if(buttons[a].innerText == buttons[b].innerText && 
       buttons[b].innerText == buttons[c].innerText && 
      buttons[a].innerText != ""
    ){
      showWinner(buttons[a].innerText);
      return true;
    }
  
  }
  return false;
  
}

function showWinner(player){

  result.innerHTML = "🎉 Player " + player + " Wins!";

  popup.classList.remove("hide");

}


restartBtn.addEventListener("click",()=>{
  buttons.forEach((button,index)=>{
    button.disabled = false;
    button.innerText = "";
    popup.classList.add("hide");
  });
});

function checkDraw() {
  let filled = true;

  buttons.forEach((button) => {
    if (button.innerText == "") {
      filled = false;
    }
  });

  if (filled) {
    onDraw();
  }
}

function onDraw(){
  buttons.forEach((button,index)=>{
    draw();
    
  });
}

function draw(){
  result.innerHTML="🎉 Draw";
  popup.classList.remove("hide");
}