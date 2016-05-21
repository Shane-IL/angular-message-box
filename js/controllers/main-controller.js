app.controller('MainController', ['$scope', 'messagesManager', function($scope, messagesManager) {

    $scope.user = "Dave";

    $scope.unreadCount = function () {
        return messagesManager.getUnreadCount();
    };

    $scope.totalCount = function () {
        return messagesManager.getTotalCount();
    };
}]);

