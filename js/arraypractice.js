let eyeX = [];
let eyeY = [];

let eyeimg

function preload(){
  eyeimg = loadImage("images/eye.png")
}




function setup(){
  createCanvas(windowWidth, windowHeight);
imageMode(CENTER);
}




function draw(){
background (255,100,255);

  for(let i=0; i< eyeX.length; i++){
    image(eyeimg,eyeX[i], eyeY[i], 100, 100);
  }
// image(eyeimg,10, 10, 100, 100);
print(eyeX.length, eyeY.length);
}



function mousePressed(){

eyeX.push(mouseX);
eyeY.push(mouseY);

}

function keyPressed(){
  // if (key == 'x'&& eyeX.length>0){
  //   eyeX.splice(0,eyeX.length);//delete all
  //   eyeY.splice(0,eyeY.length);


    if (key == 'x'&& eyeX.length>0){
      eyeX.splice(0,1);//delete one by one by X key
      eyeY.splice(0,1);
  }
}
