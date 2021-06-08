class Iron{
    constructor(x,y,width,height){

        var options= {'restitution':0.3,
        density:8,
        friction:2
        
        
        
        }
        
        
            this.body=Bodies.rectangle(x,y,width,height,options)
            World.add(world,this.body)
        this.width=width;
        this.height=height;
        
        }
        display(){
            push ()
            fill ("grey")
            rectMode(CENTER)
            translate (this.body.position.x,this.body.position.y)
            rotate (this.body.angle)
            rect(0,0,this.width,this.height);
            pop ();
        }
}