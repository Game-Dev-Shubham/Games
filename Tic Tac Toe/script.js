const buttons = document.querySelectorAll("#btn");

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

function play(button, index) {
  button.innerText = turn;
  if(checkWin()){
    alert(turn +" "+"Win")
    return;
  };
  
  
  turn = (turn === "X") ? "O" : "X";
  
  
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
      
      return true;
    }
  
  }
  return false;
  
}




