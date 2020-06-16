class Form{
	constructor(){
     
      
        this.button = createButton('PLAY');
        this.homeScreen = createSprite(displayWidth/2, displayHeight/2, displayWidth*2, displayHeight);
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
       	game.play();
       	gameState = 1;

       

        })


        }
		}
	
