class Paper{
	constructor(x,y,r){
		var options ={
			isStatic : false,
			restitution : 0.3,
			friction : 0.5,
			density : 1.2
		}
		this.r = r
		this.body = Bodies.circle(x, y, this.r, options);
		

		World.add(world,this.body);
	}

	display(){
		var pos = this.body.position;
		push();
		translate(pos.x, pos.y);
		ellipseMode(RADIUS);
		ellipse(0,0,this.r,this.r)
		pop();
	}

}