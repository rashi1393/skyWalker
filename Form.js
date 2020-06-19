class Form{
	constructor(game){
     
      
        this.button = createButton('PLAY');
        this.homeScreen = createSprite(displayWidth/2, displayHeight/2, displayWidth*2, displayHeight);
        this.game=game
	}

	/*hide(){
		
		this.button.hide();
    this.homeScreen.visible = false;
	}*/

	display(){
		
        


       
        this.button.position(displayWidth/2 + 30, displayHeight/2);
        
        this.button.mousePressed(()=>{

                this.homeScreen.visible = false;
               	this.button.hide();
                console.log(game)
               	this.game.play();
               	this.game.updateGameState(1);

       

        })


        }
		}
	
