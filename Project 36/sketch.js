//Create variables here
var dog, dogImg;
var happyDogImg;
var database;
var foodS, foodStock;

var feedButton, addFoodButton;
var fedTime, lastFed, currentTime;
var foodObj;

var form;

var gameState, readState, changeState;
var bedroomImg, gardenImg, washroomImg;

function preload()
{
  //loading images
  dogImg = loadImage("Images/Dog.png");
  happyDogImg = loadImage("Images/happy dog.png");

  bedroomImg = loadImage("Images/Bed Room.png");
  gardenImg = loadImage("Images/Garden.png");
  washroomImg = loadImage("Images/Wash Room.png");
}

function setup() {
  database = firebase.database();

  createCanvas(500, 500);
  
  foodObj = new Food();
  form = new Form();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  fedTime = database.ref('FeedTime');
  fedTime.on("value", function(data){
    lastFed = data.val();
  });

  readState = database.ref('gameState');
  readState.on("value", function(data){
    gameState = data.val();
  });

  //adding the dog
  dog = createSprite(200, 400, 75, 75);
  dog.addImage(dogImg);
  dog.scale = 0.15;

  //creating the feed button
  feedButton = createButton("Feed");
  feedButton.position(400, 430);
  feedButton.mousePressed(feedDog);

  //creating the add food button
  addFoodButton = createButton("Add Food");
  addFoodButton.position(480, 430);
  addFoodButton.mousePressed(addFood);

  
}


function draw() { 

  if (gameState != "Hungry"){
    feedButton.hide();
    addFoodButton.hide();
    dog.x = 1000;
  }else{
    feedButton.show();
    addFoodButton.show();
    dog.addImage(dogImg);
    dog.x = 300;
  }


  currentTime = hour();
  if (currentTime == (lastFed + 1)){
    update("Playing");
    foodObj.garden();
  }else if(currentTime == (lastFed + 2)){
    update("Sleeping");
    foodObj.bedroom();
  }else if(currentTime > (lastFed + 2) && currentTime <= (lastFed + 4)){
    update("Bathing");
    foodObj.washroom();
  }else{
    update("Hungry");
    foodObj.display();
  }

  form.display();
  drawSprites();

}



function readStock(data){
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
}


//function to add food
function addFood(){
  foodS++;
  database.ref('/').update({
    Food: foodS
  })
}

//function to feed the dog
function feedDog(){
  dog.addImage(happyDogImg);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food: foodObj.getFoodStock(),
    FeedTime: hour()
  })

}

//function to add gameState in database
function update(state){
  database.ref('/').update({
    gameState: state
  });
}