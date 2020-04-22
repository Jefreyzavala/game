function arrow()
{
  this.centerX = shift + 50 + myBoard.stick.width + 10;
  this.initX = this.centerX;
  this.initY = 60;
  this.rad = 25;
  this.xs = [];
  this.ys = [];
  
  this.offset = 100;

  this.draw = function()
{
   
    this.xs = [this.initX, this.initX - this.rad, this.initX + this.rad];
    this.ys = [this.initY, this.initY - this.rad, this.initY - this.rad];
    fill(255,215,0);
    triangle(this.xs[0], this.ys[0], this.xs[1], this.ys[1], this.xs[2], this.ys[2]);
  }

  this.update = function()
 {
    var begin = shift + myBoard.stick.width;
    
    var newCol = floor(map(mouseX , begin, width - 80, 0, 7));
    
    this.initX = newCol * this.offset + this.centerX;
    this.initX = constrain(this.initX, this.centerX, 6 * this.offset + this.centerX);
  }
}
