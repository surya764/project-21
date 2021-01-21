var canvas;
var music;
var rectangle1;
var rectangle2;
var rectangle3;
var rectangle4;
var rectangle5;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    

    //create 4 different surfaces

    box = createSprite(random(20,750),50,50);
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = 3;
     
    rectangle1 = createSprite(80, 580, 150, 10);
    rectangle1.shapeColor = "cyan";

    rectangle2 = createSprite(250, 580, 150, 10);
    rectangle2.shapeColor = "red";

    rectangle3 = createSprite(420, 580, 150, 10);
    rectangle3.shapeColor = "purple";

    rectangle4 = createSprite(590, 580, 150, 10);
    rectangle4.shapeColor = "yellow";

    rectangle5 = createSprite(740, 580, 100, 10);
    rectangle5.shapeColor = "pink";

    

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
   

    //add condition to check if box touching surface and make it box

    if(rectangle1.isTouching(box) && box.bounceOff(rectangle1)){
        box.shapeColor = "cyan"
    }

    if(rectangle2.isTouching(box) && box.bounceOff(rectangle2)){
        box.shapeColor = "red"
    }

    if(rectangle3.isTouching(box) && box.bounceOff(rectangle3)){
        box.shapeColor = "purple"
    }

    if(rectangle4.isTouching(box) && box.bounceOff(rectangle4)){
        box.shapeColor = "yellow"
    }

    if(rectangle5.isTouching(box)){
        box.shapeColor = "pink"
        box.velocityX = 0;
        box.velocityY = 0;
    }

    

  drawSprites();
}

