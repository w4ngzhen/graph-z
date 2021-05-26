import Point from '../base/Point'
import Size from "../base/Size";
import BaseShape from "./BaseShape";

export default class Rect implements BaseShape {

    isHovered: boolean;

    isSelected: boolean;

    location: Point;

    size: Size;

    render(ctx: CanvasRenderingContext2D): any {
        ctx.save()
        ctx.beginPath();
        ctx.strokeRect(
            this.location.x, this.location.y,
            this.size.width, this.size.height
        );
        ctx.closePath();
        ctx.restore();
    }

}

