'use strict';

function testCtrl($scope){
    $scope.pureWater="pure water";
}

angular.module('testApp',[])
    .controller('testCtrl', testCtrl);

angular.module('testApp',[])
    .directive("drink", function() {
      return {
          restrict:'AE',
          scope:{
              water:'@'
         },
         template:"<div>{{water}}</div>"
     }
});