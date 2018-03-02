angular.module('toDoApp', []).controller('toDoController', [
  '$scope',
  $scope => {
    $scope.tasks = [
      {
        id: Date.now(),
        text: 'Make a todo list in angularJS',
        checked: false,
      },
    ];
    $scope.selectedTasksCount = 0;
    $scope.selectedAll = false;
    $scope.newTaskName = '';

    $scope.addTask = () => {
      const name = $scope.newTaskName;
      if (name) {
        $scope.tasks.push({
          id: Date.now(),
          text: name,
        });
        $scope.newTaskName = '';
      }
    };
    $scope.selectTask = (event, selectedTask) => {
      if (event.target.checked) {
        $scope.selectedTasksCount++;
      } else {
        $scope.selectedTasksCount--;
      }
    };
    $scope.toggleSelection = () => {
      $scope.selectedAll = !$scope.selectedAll;
      $scope.tasks = $scope.tasks.map(task => {
        return { ...task, checked: $scope.selectedAll };
      });
      $scope.selectedTasksCount = $scope.selectedAll ? $scope.tasks.length : 0;
    };
    $scope.deleteSelected = () => {
      $scope.tasks = $scope.tasks.filter(task => !task.checked);
      $scope.selectedTasksCount = 0;
    };
    $scope.deleteAll = () => {
      $scope.tasks = [];
      $scope.selectedTasksCount = 0;
    };
  },
]);
