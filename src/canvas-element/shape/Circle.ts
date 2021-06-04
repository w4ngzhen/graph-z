import BaseShape from "./BaseShape";

export class Circle extends BaseShape {

    constructor() {
        super();
    }

    render(ctx: CanvasRenderingContext2D): any {
        // 取Size最小边/2作为圆半径
        let r = Math.min(this.size.width, this.size.height) / 2;
        // 设定圆位置为相切于以location和对应size得到的矩形的左边和上边
        // 那么圆心位置为以location基础，右移半径，下移半径
        let center = {x: this.location.x + r, y: this.location.y + r}
        ctx.save();
        ctx.beginPath();
        this.handleHovered(ctx);
        ctx.arc(center.x, center.y, r, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }

}
