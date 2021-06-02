/**
 * 基础类型定义
 */
import Point from "../base/Point";
import Size from "../base/Size";

export default interface BaseShape {

    /**
     * 鼠标是否悬浮在当前图形
     */
    isHovered: boolean;

    /**
     * 当前图形是否被选中
     */
    isSelected: boolean;

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
     * 传入ctx由子类完成渲染
     * @param ctx
     */
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
