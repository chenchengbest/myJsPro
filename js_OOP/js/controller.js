/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-08-08 11:05:45
 * @version $Id$
 */

function PhoneListCtrl($scope, $http) {
  $http.get('/data/myData.html').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}
/* var PhoneListCtrl= ['$scope', '$http', function($scope, $http) { 
	$http.get('/data/myData.html').success(function(data) {
	    $scope.phones = data;
	  });
	  $scope.orderProp = 'age';
	}
];*/

function PhoneDetailCtrl($scope, $routeParams) {
  $scope.phoneId = $routeParams.id;
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams'];