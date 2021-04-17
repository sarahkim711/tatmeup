let vrScene;
let canvas;
let enterButton;

let texture1Button;
let texture2Button;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '1');

  textAlign(CENTER);

  //create the buttons for textures
  texture1Button = createButton('Texture 1');
  texture1Button.style('position', 'relative');
  texture1Button.style('z-index', '2');
  texture1Button.mousePressed(texture1);

  texture2Button = createButton('Texture 1');
  texture2Button.style('position', 'relative');
  texture2Button.style('z-index', '2');
  texture2Button.mousePressed(texture2);

  //load the a-frame scene in the vrScene variable by targeting its HTML id
  vrScene = select("#vrScene");
}

//when the button is pressed this function is triggered
function texture1(){
  //remove the button and the canvas
  texture1Button.remove();
  texture2Button.remove();
  canvas.remove();
  //update the texture used and place it on the model
  mtlFile.setAttribute("src", "structureScan.mtl");
  bodyModel.setAttribute("obj-model", "obj: #body-obj; mtl: #body-mtl")
  vrScene.show();

}

//when the button is pressed this function is triggered
function texture2(){
  //remove the button and the canvas
  texture1Button.remove();
  texture2Button.remove();
  canvas.remove();

  //update the texture used and place it on the model
  mtlFile.setAttribute("src", "structureScan2.mtl");
  bodyModel.setAttribute("obj-model", "obj: #body-obj; mtl: #body-mtl");

  //show the a-frame scene
  vrScene.show();
}

//simple paint brush in draw
function draw() {

}