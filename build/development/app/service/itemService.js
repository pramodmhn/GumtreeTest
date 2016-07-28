(function(){

    var modelFactory = function($http){
        var factory = {};
        
        factory.getContents = function(){
            return $http({
                method : 'get', 
                url:'json/content.json',               							
				headers: {
					Accept: "*/*",
					"Content-Type": "application/x-www-form-urlencoded",
					"charset" :"UTF-8"
				}
            });
        };
    return factory;
        
    };
   
    modelFactory.$inject = ['$http'];
    angular.module('appIpad')
    .factory('modelFactory',modelFactory);
    
}());