class Game{

    constructor(){

        this.player1Image = loadAnimation("Images/mainPlayer1.png", "Images/mainPlayer2.png");
        this.player2Image = loadAnimation("Images/opponent1.png", "Images/opponent2.png");
        this.player3Image = loadAnimation("Images/opponent4.png", "Images/opponent5.png");
        this.player4Image = loadAnimation("Images/opponent7.png", "Images/opponent8.png");

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
        gameState = data.val();
        })

    }

    update(state){

        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }

        car1 = createSprite(200, displayHeight - 200);
        car1.addAnimation("player1", this.player1Image);
        car1.scale = 0.1;
        car2 = createSprite(200, displayHeight - 400);
        car2.addAnimation("player2",this.player2Image);
        car2.scale = 0.1;
        car3 = createSprite(200, displayHeight - 600);
        car3.addAnimation("player3",this.player3Image);
        car3.scale = 0.1;
        car4 = createSprite(200, displayHeight - 800);
        car4.addAnimation("player4",this.player4Image);
        car4.scale = 0.1;

        cars = [car1, car2, car3, car4];
      }

    play(){

        form.hide();
        background(bgImage)
        textSize(30);
        text("Game Start", displayWidth/2 - 270, 180)
        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            //var display_position = 230;

            // index of the array
            var index = 0;
             
            //x and y positions of the cars
            var y = 0;
            var x;

            for(var plr in allPlayers){

                //add 1 to the index for every loop
                index = index + 1;

                //position the cars from each other in y-direction
                 
                y = y + 200;

                //use data from database to display the cars in Y- direction

                x = displayWidth - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;

                if(index === player.index){
                    //cars[index - 1].shapeColor = "red";
                    camera.position.y = displayHeight/2;
                    camera.position.x =cars[index - 1].x;
                }

                 
            //display.position+=40;
            //textSize(15);
            // text(allPlayers[plr].name + ":" + allPlayers[plr].distance, displayWidth/2 - 250, display_position);
        
        }
    }
        if(keyDown("right") && player.index !== null){
            player.distance += 50;
            player.update();
        }

        if(player.distance > 5500){
            gameState = 2;
        }

        drawSprites();
    }

}
    