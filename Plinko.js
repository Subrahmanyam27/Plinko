class plinko{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10,{isStatic:true});
        this.width = 20;
        this.height = 20;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}