import GraphZ from '../src/index';
import Rect from "../src/canvas-element/shape/Rect";
import {Circle} from "../src/canvas-element/shape/Circle";
import {BaseLine} from "../src/canvas-element/line/BaseLine";

let graphZ = new GraphZ(<HTMLCanvasElement>document.getElementById('canvas'));
let rect1 = new Rect();
rect1.location = {x: 0, y: 10};
rect1.size = {width: 200, height: 100};

let rect2 = new Rect();
rect2.location = {x: 250, y: 10};
rect2.size = {width: 200, height: 100};

let circle1 = new Circle();
circle1.size = {width: 200, height: 150};
circle1.location = {x: 50, y: 400};

let line1 = new BaseLine();
line1.start = {x: 70, y: 55};
line1.end = {x: 150, y: 99};

let line2 = new BaseLine();
line2.start = {x: 88, y: 88};
line2.end = {x: 150, y: 99};

// graphZ.addShape(rect1);
graphZ.addShape(rect2);
graphZ.addShape(circle1);


graphZ.addLine(line1);
graphZ.addLine(line2);
graphZ.start();
