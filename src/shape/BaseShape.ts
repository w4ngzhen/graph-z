/**
 * 基础类型定义
 */
import Point from "../base/Point";

export default interface BaseShape {

    isHovered: boolean;

    isSelected: boolean;

    render(ctx: CanvasRenderingContext2D): any;

    /**
     * 判断某个点是否在当前图形的内部
     * @param point
     */
    isPointIn(point: Point): boolean;
}
