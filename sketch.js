function preload(){
  bunny_image=loadImage("images/rabbit.png")
  carrot_image=loadImage("images/carrot.png")
  brick_image=loadImage("images/brick.png")
  snake_image=loadImage("images/snake.png")
}

function setup() {
  createCanvas(800,500);
  edges=createEdgeSprites();
  bg=createSprite(400,250,800,500)
  bg.shapeColor="purple"
  
  
  snakeGroup=new Group()
  bunny=createSprite(40,466,40,40)
  bunny.addImage(bunny_image)
  bunny.scale=0.18
  carrot=createSprite(760,47,40,40)
  carrot.addImage(carrot_image)
  carrot.scale=0.35
  block1=createSprite(50,110,100,16)
  block1.velocityX=10
  block1.addImage(brick_image)
  block1.scale=1
  block2=createSprite(50,220,100,16)
  block2.velocityX=8
  block2.addImage(brick_image)
  block2.scale=1
  block3=createSprite(50,310,100,16)
  block3.velocityX=12
  block3.addImage(brick_image)
  block3.scale=1
  block4=createSprite(50,400,100,16)
  block4.velocityX=11
  block4.addImage(brick_image)
  block4.scale=1
}
var carrot_touched=false
var block_touched=false


function draw() {
  block1.bounceOff(edges[0])
  block1.bounceOff(edges[1])
  block2.bounceOff(edges[0])
  block2.bounceOff(edges[1])
  block3.bounceOff(edges[0])
  block3.bounceOff(edges[1])
  block4.bounceOff(edges[0])
  block4.bounceOff(edges[1])
  if(keyDown("up")){
    bunny.y=bunny.y-5
  }
  if(keyDown("down")){
    bunny.y=bunny.y+5
  }
  if(keyDown("right")){
    bunny.x=bunny.x+5
  }
  if(keyDown("left")){
    bunny.x=bunny.x-5
  }
  if(bunny.isTouching(block1)){
    block_touched=true
    bunny.x=40
    bunny.y=466
  }
  if(bunny.isTouching(block2)){
    block_touched=true
    bunny.x=40
    bunny.y=466
  }
  if(bunny.isTouching(block3)){
    block_touched=true
    bunny.x=40
    bunny.y=466
  }
  if(bunny.isTouching(block4)){
    block_touched=true
    bunny.x=40
    bunny.y=466
  }
  if(bunny.isTouching(carrot)){
    carrot.destroy();
    carrot_touched=true
    block1.velocityX=0
    block2.velocityX=0
    block3.velocityX=0
    block4.velocityX=0
  }
  snakes()
  for(let i=0;i<snakeGroup.length;i++){
    temp_snake=snakeGroup.get(i)
    if(bunny.isTouching(temp_snake)){
      bunny.x=40
      bunny.y=466
    }
  }
  
  drawSprites();
  textSize(32)
  fill("white")
  if(carrot_touched==true){
    text("HURRAY! YOU WIN",250,250)
  }
  function snakes(){
    if(frameCount%40==0){
      snake=createSprite(70,440,80,8)
      snake.velocityX=7
      snake.addImage(snake_image)
      snake.scale=0.07
      snake.y=random(70,440)
      snakeGroup.add(snake)
    }
  }
}