'use strict';

app.controller('HomeController',[ 'HomeService', '$scope', function( homeService , $scope) {

			var self = this;


		}]);


app.controller('DashController',[  '$scope', function( $scope) {

			var self = this;
			
			  $('#status-report-listing').DataTable({
			      "aLengthMenu": [
			        [5, 10, 15, -1],
			        [5, 10, 15, "All"]
			      ],
			      "iDisplayLength": 10,
			      "language": {
			        search: ""
			      },
			      searching: false, paging: false, info: false
			    });


		}]);