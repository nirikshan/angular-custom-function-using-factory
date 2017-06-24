var app = angular.module('Myapp',[]);
app.controller('controlls',function($scope,allServices) {
    $scope.run = function(inbox,select) {
    	      if (select == 1) {
               $scope.outbox =  allServices.rev(inbox);
		   	  }else if(select == 2){
                  $scope.outbox =  allServices.up(inbox);
		   	  }else if(select == 3){
                  $scope.outbox =  allServices.low(inbox);
		   	  }else if(select == 4){
                   $scope.outbox =  allServices.rEvAgain(inbox);
		   	  }
    }
})