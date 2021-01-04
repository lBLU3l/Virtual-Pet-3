class Form{
    constructor(){
        //this.input = createInput("Your Dog's Name Here...");
        //this.button = createButton('Continue');
        this.title = createElement('h1');
        this.heading = createElement('h2');
        this.dogName = createElement('h3');
        this.author = createElement('h3');
    }

    hide(){
        //this.input.hide();
        //this.button.hide();
        this.title.hide();
        this.heading.hide();
        this.author.hide();
    }

    display(){
        //this.title.html("Virtual Pet");
        //this.title.position(displayWidth/2, 100);

        //this.author.html("By: Rachel Saini");
        //this.author.position(displayWidth/2 + 10, 200);

        this.heading.position(displayWidth/2 - 40, displayHeight/2 - 140);
        //this.input.position(displayWidth/2 - 10, displayHeight/2 - 80);
        //this.button.position(displayWidth/2 + 45, displayHeight/2);

        

    }


}