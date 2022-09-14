class BalaCanhao {
    constructor(x, y) {
        var options = {
            isStatic: true
        };
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r / 2, options);
        this.image = loadImage("./assets/cannonball.png");
        this.trajetoria = [];
        World.add(world, this.body);
    }

    //função remove
    remove(i) {
        setTimeout(() => {
            World.remove(world, balas[i].body);
            balas.splice(i);
        }, 1000);

    }


    atirar() {
        var novoAngulo = canhao.angle - 28;
        novoAngulo = novoAngulo * (3.14 / 180)
        var v = p5.Vector.fromAngle(novoAngulo);
        v.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
            x: v.x * (180 / 3.14),
            y: v.y * (180 / 3.14)
        });
    }

    display() {
        // var angle = this.body.angle;
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();

        if (this.body.velocity.x > 0 && pos.x > 10) {
            var position = [pos.x, pos.y];
            this.trajetoria.push(position);
        }

        for (var i = 0; i < this.trajetoria.length; i++) {
            image(this.image, this.trajetoria[i][0], this.trajetoria[i][1], 5, 5);
        }
    }
}