app.controller('InboxController', ['$scope', 'messagesManager', function($scope, messagesManager) {

    $scope.messages = messagesManager.getMessagesArray();

    $scope.getReadStatus = function(message){
        return !message.isRead ? 'message-unread': 'message-read';
    };

    $scope.markRead = function (index) {
        messagesManager.markRead(index, true);
    };
}]);
