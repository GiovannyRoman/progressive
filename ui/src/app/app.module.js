import canvasApp from './canvas/canvas.module.js'

export default
  angular
    .module('progressive', ['ngAria',
      'ngAnimate', 'ngMaterial',
      'ngMessages', 'ui.router', canvasApp
    ])
    .name
