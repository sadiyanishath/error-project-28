class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length: 10
        }
        this.Slingshot = Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.Slingshot);
    }
     fly(){
        this.Slingshot.bodyA=null
     }

    display(){
        if(this.Slingshot.bodyA){
        var pointA = this.Slingshot.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        fill("blue")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    
}
