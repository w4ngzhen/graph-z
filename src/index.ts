import BaseShape from "./shape/BaseShape";
import utils from "./utils/utils";

class GraphZ {

    private _shapes: Array<BaseShape>

    private _running: boolean = false

    private readonly _canvasEle: HTMLCanvasElement

    private readonly _ctx: CanvasRenderingContext2D

    constructor(canvasEle: HTMLCanvasElement) {
        this._canvasEle = canvasEle;
        this._ctx = this._canvasEle.getContext('2d');
        this._shapes = [];
        this.initListener();
    }

    private initListener() {
        this._canvasEle.addEventListener('mousemove', e => {
            let point = utils.calcMousePointOnCanvas(
                this._canvasEle, {x: e.clientX, y: e.clientY});
            this._shapes.forEach(shape => {
                shape.isHovered = shape.isPointIn(point);
            })
        })
    }

    addShape(shape: BaseShape) {
        this._shapes.push(shape);
    }

    private render() {
        this._shapes.forEach(shape => {
            shape.render(this._ctx);
        })
    }

    start() {
        if (this._running) {
            return;
        }
        setInterval(() => {
            this.render();
        }, 340);
    }
}

export default GraphZ
