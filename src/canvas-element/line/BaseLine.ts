import Point from "../../base/Point";
import Element from "../Element";

export class BaseLine extends Element {

    start: Point;

    end: Point;

    constructor() {
        super();
        this.start = {x: 0, y: 0};
        this.end = {x: 0, y: 0};
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.beginPath();
        this.handleHovered(ctx);
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        ctx.stroke();
        ctx.closePath()
        ctx.restore();
    }

    /**
     * 检查对应点是否在当前线上
     * 允许线两侧宽度为5的误差
     * @param point
     */
    isPointOn(point: Point, ctx: CanvasRenderingContext2D): boolean {
        ctx.save();
        ctx.beginPath();
        this.handleHovered(ctx);
        ctx.lineWidth = 10;
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        ctx.stroke();
        ctx.closePath()
        ctx.restore();
        return false;
    }
}
