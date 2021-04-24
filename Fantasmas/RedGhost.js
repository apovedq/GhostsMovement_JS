class RedGhost extends Ghost {
    
    constructor(x, y) {
        super(x, y);
        this.dir = 0;
        this.radius = 20;
        this.move = true;
        this.dir = false;
    }

    movement() {
        if (this.dir == false) { this.y++; }
        if (this.dir == true) { this.y--; }
        
        if (this.y > 420) {
            this.dir = !this.dir;
        }

        if (this.y < -20) {
            this.dir = !this.dir;
        }
        
        console.log(this.dir);
    }


    display() {
        fill(255, 0, 0);
        circle(this.x, this.y, this.radius);
        this.movement();
    }

    
    
    


}