import GraphZ from '../src/index';
import Rect from "../src/shape/Rect";

let graphZ = new GraphZ(<HTMLCanvasElement>document.getElementById('canvas'));
let rect1 = new Rect();
rect1.location = {x: 0, y: 10};
rect1.size = {width: 200, height: 100};

let rect2 = new Rect();
rect2.location = {x: 0, y: 10};
rect2.size = {width: 200, height: 100};

graphZ.addShape(rect1);
graphZ.addShape(rect2);
graphZ.start();
