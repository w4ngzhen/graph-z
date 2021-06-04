import BaseShape from "./BaseShape";

export default class Rect extends BaseShape {

    constructor() {
        super();
    }

    render(ctx: CanvasRenderingContext2D): any {
        ctx.save()
        ctx.beginPath();
        this.handleHovered(ctx);
        ctx.strokeRect(
            this.location.x, this.location.y,
            this.size.width, this.size.height
        );
        ctx.closePath();
        ctx.restore();
    }

}

