var app = angular.module('adminApp',['ui.router']);

app.constant('urls', {
    BASE: 'http://localhost:8080/',
    API : 'http://localhost:8080/api/'
});

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

	
	var home= {	
			
			name: 'home',
            url: '/',
            templateUrl: 'dash.html',
            controller:'DashController',
            controllerAs:'ctrl',
            resolve:function(){
            	
            	
            }
        };
	
	
		$stateProvider.state(home);
	//	$stateProvider.state(view);
        
        $urlRouterProvider.otherwise('/');
        
        
    }]);

