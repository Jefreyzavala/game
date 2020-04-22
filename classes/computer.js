function computer()
{ 
  var board;
  this.play = function()
{
    board = myBoard.holes;
    var flag = false;
    
		for(var i=0; i<6; i++)
		{
			for(var j=0; j<4; j++)
			{
        var current = [board[i][j],board[i][j+1],board[i][j+2],board[i][j+3]];
        flag = this.checkCurr(current, i, j, 1);
        if(flag != false)
          return flag;
			}
		}
		
		for(var i=0; i<7; i++)
		{
			for(var j=0; j<3; j++)
			{
        var current = [board[j][i],board[j+1][i],board[j+2][i],board[j+3][i]];
        state = this.checkCurr(current, i, j, 2);
        if(flag != false)
          return flag;
			}
		}
		
		for(var i=0; i<3; i++)
		{
			for(var j=0; j<4; j++)
			{
        var current = [board[i][j],board[i+1][j+1],board[i+2][j+2],board[i+3][j+3]];
        flag = this.checkCurr(current, i, j, 3);
        if(flag != false)
          return flag;
			}
		}
		
		for(var i=0; i<3; i++)
		{
			for(var j=3; j<7; j++)
			{
       var current = [board[i][j],board[i+1][j-1],board[i+2][j-2],board[i+3][j-3]];
       flag = this.checkCurr(current, i, j, 4);
       if(flag != false)
         return flag;
			}
		}

   
    var flag1 = true;
    while(flag1)
{
      var current = floor(random(0,7));
      if(!myBoard.checkColFull(current))
{
        myBoard.addInCol(current, turn);
        flag = myBoard.checkWin();
        flag1 = false;
        return flag;
      }
    }

      return false; 
  }

  this.checkCurr = function(curr, i, j, cs)
{
    var current = 0, current1 = 0;
    for(var k=0; k<4; k++)
{
     if(curr[k] == 'X') current++;
     else if(curr[k] == 'O') current1++;
    }


    
    if(current1 == 3 && current != 1)
{
      for(var k=0; k<4; k++)
{
        if(curr[k] == '-')
{
          console.log("okkkk2");
          
          if(cs == 1)
{
           
            myBoard.addInCol(j+k, turn);
      
          }
          if(cs == 2)
            myBoard.holes[j+k][i] = 'O';
          if(cs == 3){
           
            myBoard.addInCol(j+k, turn);
            
          }
          if(cs == 4)
{
           
            myBoard.addInCol(j-k, turn);
           
          }

          return myBoard.checkWin();
        }
      }
    }

   
     if(current == 3 && current1 != 1)
{
       for(var k=0; k<4; k++)
{
          if(curr[k] == '-')
{
            console.log("okkkk");
           
            if(cs == 1){
             
              myBoard.addInCol(j+k, turn);
              
            }
            if(cs == 2)
              myBoard.holes[j+k][i] = 'O';
            if(cs == 3)
{
              
              myBoard.addInCol(j+k, turn);
              
            }
            if(cs == 4){
              
              myBoard.addInCol(j-k, turn);
         
            }

          return myBoard.checkWin();
         }
       }
     }

    return false;
  }
}