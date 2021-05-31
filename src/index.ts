import BaseShape from "./shape/BaseShape";
import utils from "./utils/Utils";
import Point from "./base/Point";

class GraphZ {

    private readonly _shapes: Array<BaseShape>

    private _running: boolean = false

    private readonly _canvasEle: HTMLCanvasElement

    private readonly _ctx: CanvasRenderingContext2D

    private _dragMode: boolean

    private _mouseDownPosition: Point | null

    private _mousePosition: Point | null

    constructor(canvasEle: HTMLCanvasElement) {
        this._canvasEle = canvasEle;
        this._ctx = this._canvasEle.getContext('2d');
        this._shapes = [];
        this.initListener();
    }

    private initListener() {
        this._canvasEle.addEventListener('mousedown', e => {
            // 记录鼠标按下的位置
            this._mouseDownPosition = utils.calcMousePointOnCanvas(
                this._canvasEle, {x: e.clientX, y: e.clientY});

            let idxOfSelected = -1;
            for (let idx = 0; idx < this._shapes.length; idx++) {
                let candidateShape = this._shapes[idx];
                if (idxOfSelected !== -1) {
                    // 存在已经选择的图形，其余图形均属于未选择
                    // todo 分组选择处理
                    candidateShape.isSelected = false;
                    continue;
                }
                if (candidateShape.isPointIn(this._mouseDownPosition)) {
                    // 图形状态为选中；设置idx；进入拖拽模式。
                    candidateShape.isSelected = true;
                    idxOfSelected = idx;
                    this._dragMode = true;
                    this._canvasEle.style.cursor = 'move';
                } else {
                    candidateShape.isSelected = false;
                    this._canvasEle.style.cursor = 'default';
                }
            }
        });

        this._canvasEle.addEventListener('mouseup', e => {
            this._dragMode = false;
            this._mouseDownPosition = null;
            this._canvasEle.style.cursor = 'default';
        })

        this._canvasEle.addEventListener('mousemove', e => {
            let lastMousePotion = this._mousePosition;
            this._mousePosition = utils.calcMousePointOnCanvas(
                this._canvasEle, {x: e.clientX, y: e.clientY});

            let vector: Point;
            if (!lastMousePotion) { // 处理第一次的mousemove事件
                vector = {x: 0, y: 0};
            } else {
                vector = {
                    x: this._mousePosition.x - lastMousePotion.x,
                    y: this._mousePosition.y - lastMousePotion.y
                };
            }

            if (this._dragMode) {
                let selectedShapes = this._shapes.filter(s => s.isSelected);
                this._canvasEle.style.cursor = 'move';
                selectedShapes.forEach(ss => {
                    let oldLocation = ss.location;
                    ss.location = {
                        x: oldLocation.x + vector.x,
                        y: oldLocation.y + vector.y
                    }
                })
            }

            this._shapes.forEach(shape => {
                shape.isHovered = shape.isPointIn(this._mousePosition);
            })
        })
    }

    addShape(shape: BaseShape) {
        if (this._shapes.indexOf(shape) >= 0) {
            return; // 已经添加了则直接返回
        }
        this._shapes.push(shape);
    }

    private render() {
        this._shapes.forEach(shape => {
            shape.render(this._ctx);
        })
    }


    start() {
        this._running = true;
        this.startRender();
    }

    private startRender() {
        if (!this._running) {
            return;
        }
        this._ctx.clearRect(0, 0, this._canvasEle.width, this._canvasEle.height);
        this.render();
        requestAnimationFrame(() => this.startRender());
    }
}

export default GraphZ
