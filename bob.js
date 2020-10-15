class Bob{
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,30,options);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(pos.x, pos.y, 30);
      }
    };
