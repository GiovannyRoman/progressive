import canvasApp from './canvas.component.js'
//import mainpageService from './mainpage_service/mainpageService.js'

export default
  angular
    .module('canvasApp', [])
    .component('canvasApp', canvasApp)
//    .service('mainpageService', mainpageService)
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/')
      $stateProvider
        .state('home', {
          url: '/',
          component: 'canvasApp'
        })
    }])
    .name
