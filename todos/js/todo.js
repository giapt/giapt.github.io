angular.module('ToDo', []).
controller('todoController',['$scope',function($scope){
	$scope.todos=[];
	$scope.itemcount = 0;

	$scope.addTodo=function(){
		$scope.todos.push({'title':$scope.newTodo,'done':false})
		$scope.newTodo=''
		$scope.itemcount++;
	}
	$scope.clearCompleted=function(){
		$scope.todos=$scope.todos.filter(function(item){
			$scope.itemcount--;
			return !item.done
		})
	}

}])