app.controller('MessageController', ['$scope', 'messagesManager', '$routeParams', function($scope, messagesManager,$routeParams) {

    $scope.currentMessage = messagesManager.getMessageByIndex($routeParams.id);

}]);
