import Point from "../base/Point";

declare module Utils {
    function calcMousePointOnCanvas(canvas: HTMLCanvasElement, clientPoint: Point): Point
}
export default Utils;
