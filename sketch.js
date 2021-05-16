//Create variables here

function preload()
{
	//load images here
  bg = loadImage("doglmg1.png");
}

function setup() {
	createCanvas(500, 500);
foodStock=database.ref('foodStock');
foodStock.on("value",readStock);
}


function draw() {  
  drawSprites();
  //add styles here
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
    textSize("50,50,100,100"); 
    fill("blue");
    stroke(10);
    //Function to read values from DB
    function readStock(data){
      foodS=data.val();
  }
}

//Function to write values in DB
function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}
}
