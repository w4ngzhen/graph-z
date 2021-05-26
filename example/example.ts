import GraphZ from '../src/index'
import Rect from "../src/shape/Rect";

let graphZ = new GraphZ(<HTMLCanvasElement>document.getElementById('canvas'));
let rect = new Rect();
rect.location = {x: 0, y: 10};
rect.size = {width: 200, height: 100};
graphZ.addShape(rect);
graphZ.start();
