/**
 * 基础类型定义
 */
export default interface BaseShape {

    isHovered: boolean;

    isSelected: boolean;

    render(ctx: CanvasRenderingContext2D): any;
}
