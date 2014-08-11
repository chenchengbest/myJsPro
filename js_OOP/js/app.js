/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-08-08 15:02:50
 * @version $Id$
 */

/*angular.module('phonecat', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'detail_list.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
  }])*/

var routeApp = angular.module('phonecat',['ngRoute']);
routeApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/phones', {
            templateUrl: '/js/detail_list.html',
            controller: 'PhoneListCtrl'
        })
        .when('/phones/:id', {
            templateUrl: '/js/detail.html',
            controller: 'PhoneDetailCtrl'
        })
        .otherwise({
            redirectTo: '/phones'
        });
}]);