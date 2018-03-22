
export default class CanvasController {

  /* @ngInject */
  constructor () {
    var ctrl = this
    ctrl.circle = {}
    ctrl.rectangle = {}
    ctrl.circle.x = 0
    ctrl.circle.y = 0
    ctrl.circle.radius = 0
    ctrl.rectangle.length = 0
    ctrl.rectangle.width = 0
    ctrl.rectangle.x = 0
    ctrl.rectangle.y = 0
  }

  drawRectangle = function (length, width, positionX, positionY) {
    var c = document.getElementById('myCanvas')
    var ctx = c.getContext('2d')
    ctx.rect(length, width, positionX, positionY)
    ctx.stroke()
  }

  drawCircle = function (positionX, positionY, radius) {
    var c = document.getElementById('myCanvas')
    var ctx = c.getContext('2d')
    ctx.beginPath()
    ctx.arc(positionX, positionY, radius, 0, 2 * Math.PI)
    ctx.stroke()
  }

}
