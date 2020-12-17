class Paper { 
constructor(x,y,r) {
  
   var options={ 
     isStatic:false,
     restitution:0.3, 
     friction:0.5, 
     density:1.2
     } 
     this.body=Bodies.circle(x, y, 40, options) 
     this.image = loadImage("paper.png");
     this.radius=50
    World.add(world, this.body); 
    }
     display() { 
       var pos=this.body.position;
       imageMode(CENTER) 
       image(this.image, pos.x, pos.y, 90, 140);
      }
     }