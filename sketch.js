var player
var food
var timer = 20
var score = 0

function preload(){
  bunnyWalking = loadAnimation("walking/walking (1).png", "walking/walking (2).png","walking/walking (3).png", "walking/walking (4).png", "walking/walking (5).png", "walking/walking (6).png","walking/walking (7).png", "walking/walking (8).png", "walking/walking (9).png", "walking/walking (10).png");
  //,"walking/walking (11).png", "walking/walking (12).png", "walking/walking (13).png", "walking/walking (14).png","walking/walking (15).png", "walking/walking (16).png","walking/walking (17).png", "walking/walking (18).png","walking/walking (19).png", "walking/walking (20).png"
  foodImg = loadAnimation("food/food (1).png", "food/food (2).png","food/food (3).png", "food/food (4).png", "food/food (5).png", "food/food (6).png","food/food (7).png", "food/food (8).png", "food/food (9).png", "food/food (10).png","food/food (11).png", "food/food (12).png")
  bunnyEating=loadAnimation("eating/eating (1).png", "eating/eating (2).png","eating/eating (3).png", "eating/eating (4).png", "eating/eating (5).png", "eating/eating (6).png", "eating/eating (7).png", "eating/eating (8).png", "eating/eating (9).png", "eating/eating (10).png","eating/eating (11).png");
}

function setup() {
  createCanvas(500, 500);
  player = createSprite(50,50,50,50)
  player.addAnimation("walking", bunnyWalking);
  player.addAnimation("eating", bunnyEating);
  player.scale=0.3
  player.setCollider("rectangle",0,0,150,150)
  //player.debug=true
  
  food = createSprite(250,250,50,50)
  food.addAnimation("carrot", foodImg)
  food.scale=0.3
  //food.debug=true
  food.setCollider("rectangle", 0, 40, 250,200)
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW) {
    player.velocityX= 8;
    player.velocityY= 0;
  } 
  else if (keyCode === DOWN_ARROW) {
    player.velocityY= 8;
    player.velocityX= 0;
  }
  else if (keyCode === UP_ARROW) {
    player.velocityY= -8;
    player.velocityX= 0;
  }
  else if (keyCode === LEFT_ARROW) {
    player.velocityX= -8;
    player.velocityY= 0;
  }
}

function draw() {
  background("#FF835D"); 
  
  //background("#FC5B1B")
  edges=createEdgeSprites();
  player.collide(edges)  
  fill(255)
  textAlign(LEFT, CENTER);
  textSize(15);
  text("Time Left :" + timer, 10, 15);
  
  if (frameCount % 20 == 0 && timer > 0) {
    timer --;
  }
  
  if (timer == 0) {
    textAlign(CENTER, CENTER);
    textSize(40);
    text("You Scored:" + score, width/2, height/2-50);
    player.x=width/2;
    player.y=height/2+50;
    player.changeAnimation("eating", bunnyEating);
    
    food.visible=false
  }
  var loc = dist(player.x,player.y,food.x,food.y);
  if (loc < 50){
    food.x = random(width);
    food.y = random(height);
    score ++
  }
  drawSprites();
}
