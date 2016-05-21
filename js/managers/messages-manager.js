app.factory('messagesManager', ['Messages', function (Messages) {
    var messagesManager = {
        _messages : Messages,

        getMessageByIndex: function (index) {
            return Messages[index]
        },

        getMessagesArray : function () {
            return Messages;
        },

        getUnreadCount : function(){
            var unreadCount = 0;
            for(var i in Messages){
                if(!Messages[i].isRead){
                    unreadCount++;
                }
            }
            return unreadCount;
        },

        markRead: function(index, bool){
            Messages[index].isRead = bool;
        }
    };

    return messagesManager;
}]);