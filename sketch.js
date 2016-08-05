var myred = 0;
var mygreen = 25;
var myblue = 200;
function circlce(x,y,diamter) {
  ellipse(x,y,diameter,diameter);
}
function setup() {
  createCanvas(640,480);
  
  
  
}

function draw() {
  noStroke();
  fill(myred,mygreen,myblue);
  ellipse(mouseX,mouseY, 10);
  fill(15,15,15);
  if  myred>255 {
  myred=0;}
  if mousePressed();
  fill(255,255,255);
  ellipse(mouseIsPressed,mouseIsPressed,50);
  
  }
  myred=myred+.5;
  myblue=myblue+.5;
  mygreen=mygreen+.5
  if (myblue<= 0) {
    myblue=255;
  }
  
  
  
}0