export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('app', {
    url: '/',
    component: 'app'
  }).state('bigScreen', {
    url: '/big-screen',
    component: 'bigScreen'
  }).state('adventurer', {
    url: '/adventurer',
    component: 'category',
    resolve: {
      category: () => {
        return 'adventurer';
      }
    }
  }).state('designer', {
    url: '/designer',
    component: 'category',
    resolve: {
      category: () => {
        return 'designer';
      }
    }
  }).state('developer', {
    url: '/developer',
    component: 'category',
    resolve: {
      category: () => {
        return 'developer';
      }
    }
  }).state('teacher', {
    url: '/teacher',
    component: 'category',
    resolve: {
      category: () => {
        return 'teacher';
      }
    }
  });
}
