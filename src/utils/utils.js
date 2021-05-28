export default {
  /**
   * 获取clientX，clientY坐标在canvas上的位置
   * @param canvas
   * @param clientPoint
   */
  calcMousePointOnCanvas(canvas, clientPoint) {
    //1
    let rect = canvas.getBoundingClientRect();
    //2
    let x = clientPoint.x - rect.left * (canvas.width / rect.width);
    let y = clientPoint.y - rect.top * (canvas.height / rect.height);
    return {x, y};
  }
};
