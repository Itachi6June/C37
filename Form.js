class Form{
    constructor(){
        this.input = createInput("Player Name");
        this.button = createButton("OK");
        this.greeting = createElement('h3'); 

    }
    hidden(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("Death Race");
        title.position(displayWidth/2 -50,10);
        
        
        this.input.position(displayWidth/2 -40,displayHeight/2 -80);

        
        this.button.position(displayWidth/2 +40,displayHeight/2);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount); 
           
            this.greeting.html("Hello " + player.name );
            this.greeting.position(displayWidth/2 -70, displayHeight/4);
        })
    }
}