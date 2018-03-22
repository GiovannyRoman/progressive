import canvasApp from './canvas.component.js'

export default
  angular
    .module('canvasApp', [])
    .component('canvasApp', canvasApp)
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/')
      $stateProvider
        .state('home', {
          url: '/',
          component: 'canvasApp'
        })
    }])
    .name
