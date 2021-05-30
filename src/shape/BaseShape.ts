/**
 * 基础类型定义
 */
import Point from "../base/Point";

export default interface BaseShape {

    isHovered: boolean;

    isSelected: boolean;

    location: Point;

    render(ctx: CanvasRenderingContext2D): any;

    /**
     * 判断某个点是否在当前图形的内部
     * @param point
     */
    isPointIn(point: Point): boolean;

    /**
     * 使得当前的图像无效（外部需要实现重绘）
     */
    invalidate(ctx: CanvasRenderingContext2D): void;
}
