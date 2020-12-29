class Paper {
    constructor(x,y,width,height){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(x,y,0,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/paper.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER)
        translate(pos.x,pos.y);
        push();
        fill("white")
        image(this.image,this.width,this.height,80,80);
        pop();
    }
    
}
