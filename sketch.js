var board;
var  computer;
 var  turn; 
var arrow;
var change;
 var  flag;
 var  winner;
 

function setup()
{
  
  var cnv = createCanvas(1000,700);
  cnv.parent('sketch-holder');
  shift = 200;
  myBoard = new board();
  myBoard.init();
  myArrow = new arrow();
  myComputer = new computer();
  turn = 0; 
  flag = false;
}


function draw()
{
	background(174, 225, 225);
  myBoard.draw();
  myArrow.draw();
  myArrow.update();



  if(myBoard.full())
{
    end = true;
    winner = '-';
  }

  if(flag)
{
    background(0,0,0,200);
    textSize(64);
    noStroke();
    if(winner == 'X')
{
      fill(10, 10, 255);
      var msg = "Compputer Wins!\n";
    }
    else if(winner == 'O')
{
      fill(255, 10, 10);
      var msg = "Player Wins!\n";
    }
    else if(winner == '-')
{
      fill(255);
      var msg = "DRAW!\n";
    }
    text(msg,width/2-100,height/2);
    noLoop();
  }

  if(turn == 1){
    var state = myComputer.play();
    if(state != '-' && state != false)
{
      flag = true;
      winner = state;
    }
    turn = 1 - turn;
  }
}

function mousePressed(){
  if(turn == 1) return;
  var begin = shift + myBoard.stick.width;
  var newCol = floor(map(mouseX , begin, width - 80, 0, 7));
  if(myBoard.checkColFull(newCol)) return;
  var state = myBoard.addInCol(newCol, turn);
  if(state != '-'){
    flag = true;
    winner = state;
    console.log(state);
  }
  turn = 1 - turn;
}

