class Food{
    constructor(){
        this.foodStock = 0;
        this.lastFed;
        this.image = loadImage("Images/Milk.png")
    }

    getFoodStock(){
        return this.foodStock;
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    getFedTime(lastFed){
        this.lastFed = lastFed;
    }

    deductFood(){
        if(this.foodStock > 0){
            this.foodStock = this.foodStock - 1;
        }
    }


    bedroom(){
        background(bedroomImg, 550, 500);
    }

    garden(){
        background(gardenImg, 550, 500);
    }

    washroom(){
        background(washroomImg, 550, 500);

    }



    display(){
        background(46, 139, 87);

        //calculating when the dog was last fed
        fill(255, 255, 254);
        textSize(15);
        if(lastFed >= 12){
            text("Last Feed: " + lastFed%12 + " PM", 250, 30);
        }else if(lastFed == 0){
            text("Last Feed: 12 AM", 250, 30);
        }else{
            text("Last Feed: " + lastFed + " AM", 250, 30);
        }


        var x = 70, y = 100;

        imageMode(CENTER);
        //image(this.image, 700, 300, 100, 100);


        //displaying the milk bottles
        if (this.foodStock != 0){
            for(var i = 0; i < this.foodStock; i++){
                if (i % 10 == 0){
                    x = 70;
                    y = y + 50;
                }

                image(this.image, x, y, 50, 50);
                x = x + 30;
            }
        }
    }
}