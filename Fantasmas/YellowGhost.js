class YellowGhost extends Ghost {
    
    constructor(x, y) {
        super(x, y);
        this.dir = 0;
        this.radius = 20;
        this.move = true;
    }

    movement() {
        if (this.move == true) {
            this.y++;
        }
        this.appear();
    }

    appear() {
        if (this.y > 420) {
            this.y = -20;
        }
    }

    display() {
        fill(255, 255, 0);
        circle(this.x, this.y, this.radius);
        this.movement();
    }

    
    
    


}