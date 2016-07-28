
(function(){
	
	ipadController = function($scope,modelFactory){
        
        /* get json data */
        modelFactory.getContents()
        .success(function(response){
            $scope.items = response;           
            $scope.last = $scope.items.content.length-1;//last item index           
           //console.log($scope.items.content);           
        })
        .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
					});
        
        $scope.index = 0;
        $scope.showDetail = true;
        $scope.showDetails = function(){
            $scope.showDetail = !$scope.showDetail;//expand and collapse details
        }
        
        //show next content
        $scope.itemNext = function(){   
          $scope.index += 1;
        }
       
        //show previous content     
        $scope.itemPrev = function(){ 
            if($scope.index > 0)
           $scope.index -= 1;            
        }
        
    };
    
    
    ipadController.$inject = ['$scope','modelFactory'];
    angular.module('appIpad')
    .controller('ipadController',ipadController);
}());
