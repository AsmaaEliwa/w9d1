class MovingObject {
    constructor(canvas, optional = {}) {
        // debugger
        this.pos = optional.pos || [100, 100];
        this.vel = optional.vel || [0, 0]
        this.radius = optional.radius || 10
        this.color = optional.color || "red"
        this.ctx = canvas.getContext("2d");
        this.draw(this.ctx);
    };

    draw(ctx) {

        ctx.beginPath();
        //  const startAngle=Math.PI +(Math.PI*this.vel[0])/2
        //  const endAngle=Math.PI +(Math.PI*this.vel[1])/2

        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        // ctx.stroke();

    }

}

export default MovingObject;