class Form{

    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');

    }
    hide()
    {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display()
    {
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(displayWidth/2 - 300, 10);

        this.input.position(displayWidth/2 - 280, 160);
        this.button.position(displayWidth/2 - 230, 200);

        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+ player.name);
            this.greeting.position(displayWidth/2 - 280, 160);

        });

    }
}