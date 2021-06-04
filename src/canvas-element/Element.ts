export default abstract class Element {
    /**
     * 鼠标是否悬浮在当前图形
     */
    isHovered: boolean;

    /**
     * 当前图形是否被选中
     */
    isSelected: boolean;

    /**
     * 传入ctx由子类完成渲染
     * @param ctx
     */
    abstract render(ctx: CanvasRenderingContext2D): void;

    /**
     * 处理悬浮时候的style
     * @param ctx
     */
    handleHovered(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = this.isHovered ? 'red' : 'black';
    }
}
