var app = angular.module('toDo', []);

app.controller('toDoController', function($scope){
	$scope.tasks = ["Wake up", "Brush teeth" ];
	
	$scope.addTask = function() {
	var task = $scope.descriptionFromForm;
	
		$scope.tasks.push(task);
	};

});

