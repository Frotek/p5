const WIDTH = 800; // x
const HEIGHT = 600; // y

class Circle {
    constructor(x, y, w, color, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.color = color;
        this.speed = speed;
        this.goRight = true;
    }

    draw() {
        fill(this.color);
        ellipse(this.x, this.y, this.w);
    }

    moveRight() {
        this.x = this.x + this.speed;
    }

    moveLeft() {
        this.x = this.x - this.speed;
    }

    move() {
        if (this.x < WIDTH - this.w / 2 && this.goRight) {
            this.moveRight();
            if (this.x >= WIDTH - this.w / 2) {
                this.goRight = false;
            }
        }

        if (this.x > 0 + this.w / 2 && !this.goRight) {
            this.moveLeft();
            if (this.x <= 0 + this.w / 2){
                this.goRight = true;
            }
        }
    }
}