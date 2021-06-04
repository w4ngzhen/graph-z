/**
 * 基础类型定义
 */
import Point from "../../base/Point";
import Size from "../../base/Size";
import pointInPolygon from "point-in-polygon";
import Element from "../Element";

export default abstract class BaseShape extends Element {

    /**
     * 当前图形在画布上的位置
     */
    location: Point;
    /**
     * 当前图形的大小
     * 无论是哪种图形，我们都以矩形宽高作为图形的边界
     */
    size: Size;

    /**
     * 默认的构造函数，对基础数据进行初始化
     * @protected
     */
    protected constructor() {
        super();
        this.isHovered = false;
        this.isSelected = false;
        this.location = {x: 0, y: 0};
        this.size = {width: 0, height: 0};
    }

    /**
     * 判断某个点是否在当前图形的内部
     * @param point
     * @param ctx
     */
    isPointIn(point: Point, ctx: CanvasRenderingContext2D): boolean {
        console.log(point);
        console.log(this.location, this.size);
        ctx.save();
        ctx.rect(this.location.x, this.location.y, this.size.width, this.size.height);
        ctx.stroke();
        let inIt = ctx.isPointInPath(point.x, point.y);
        console.log(typeof this + inIt); // fixme BUG
        ctx.restore();
        return inIt;
    //     let leftTop = [this.location.x, this.location.y];
    //     let rightTop = [leftTop[0] + this.size.width, leftTop[1]];
    //     let rightBottom = [rightTop[0], leftTop[1] + this.size.height];
    //     let leftBottom = [leftTop[0], rightBottom[1]];
    //     return pointInPolygon([point.x, point.y], [leftTop, rightTop, rightBottom, leftBottom]);
    };

    /**
     * 使得当前的图像无效（外部需要实现重绘）
     */
    invalidate(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(
            this.location.x - 10,
            this.location.y - 10,
            this.size.width + 20,
            this.size.height + 20)
    };
}
