class Bob
{
    constructor(x,y,r)
{
   
   
    var options={
        isStatic:true,
        restitution:0.000,
        friction:2,
        density:1.6

    };
   
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
   
    World.add(world,this.body);
};
display()
{
    var paperpos=this.body.position;

    push();
    translate(paperpos.x,paperpos.y);
    fill(255,0,255);
    ellipse(0,0, this.r, this.r);
    pop();
};
};