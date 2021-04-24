class Ghost {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.move = true;
    }

    
    especial() {

    }

    move() {
        if (this.move == true) {
            this.y++;
        }

        if (this.y > 400) {
            this.y = -20;
         }
    }


 }