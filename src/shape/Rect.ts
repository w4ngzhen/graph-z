import Point from '../base/Point'
import Size from "../base/Size";
import BaseShape from "./BaseShape";
import pointInPolygon from 'point-in-polygon';

export default class Rect implements BaseShape {

    isHovered: boolean;

    isSelected: boolean;

    location: Point;

    size: Size;

    render(ctx: CanvasRenderingContext2D): any {
        ctx.save()
        ctx.beginPath();
        ctx.strokeStyle = this.isHovered ? 'red' : 'black';
        ctx.strokeRect(
            this.location.x, this.location.y,
            this.size.width, this.size.height
        );
        ctx.closePath();
        ctx.restore();
    }

    isPointIn(point: Point): boolean {
        let leftTop = [this.location.x, this.location.y];
        let rightTop = [leftTop[0] + this.size.width, leftTop[1]];
        let rightBottom = [rightTop[0], leftTop[1] + this.size.height];
        let leftBottom = [leftTop[0], rightBottom[1]];
        return pointInPolygon([point.x, point.y], [leftTop, rightTop, rightBottom, leftBottom]);
    }

}

