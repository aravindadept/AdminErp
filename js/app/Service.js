'use strict';

app.service('HomeService', ['$http', '$q', 'urls', function ( $http, $q, urls) {


    
		    this.loadData=function loadAllData() {
		    	
		    	let apiUrl=urls.API+"data";
		        console.log('Fetching all data');
		        var deferred = $q.defer();
		        $http.get(apiUrl)
		            .then(
		                function (response) {
		                    console.log('Fetched successfully all data');
		                    $localStorage.users = response.data;
		                    deferred.resolve(response);
		                },
		                function (errResponse) {
		                	
		                    console.error('Error while loading data');
		                    $localStorage.users = {};
		                    deferred.reject(errResponse);
		                }
		            );
		        return deferred.promise;
		    }


}]);


app.service('DashService', ['$http', '$q', 'urls', function ( $http, $q, urls) {


            



        }]);