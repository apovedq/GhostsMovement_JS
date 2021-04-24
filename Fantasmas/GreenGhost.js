class GreenGhost extends Ghost {
    
    constructor(x, y) {
        super(x, y);
        this.dir = 0;
        this.radius = 20;
        this.move = true;
    }

     changeDir() {
            this.dir = int(random(0,4));

    }

    movement() {
        switch (this.dir) {
            case 0:
                this.y--;
                break;
            case 1:
                this.y++;
                break;
            case 3:
                this.x++;
                break;
            case 4:
                this.x--;
                break;
                
        }
    }

    display() {
        fill(0,0,255);
        circle(this.x, this.y, this.radius);
        this.changeDir();
        this.movement();
        console.log(this.dir);
    }


}