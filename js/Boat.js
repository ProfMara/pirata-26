class Barco {
    constructor(x, y, width, height, barcoPos) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;

        this.image = loadImage("./assets/boat.png");
        this.barcoPosicao = barcoPos;
        World.add(world, this.body);
    }

    //função remove

    remove(i) {
        setTimeout(() => {
            World.remove(world, barcos[i].body);
            barcos.splice(i);
        }, 1000);
    }

    //comando que acrescenta um delay
    //comando que remove do mundo
    //comando que deleta da matriz

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.barcoPosicao, this.width, this.height);
        pop();
    }
}