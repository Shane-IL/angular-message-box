var app = angular.module('MailBoxApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/main', {
            controller: 'MainController',
            templateUrl: 'views/main.html'
        })
        .when('/inbox', {
            controller: 'MainController',
            templateUrl: 'views/inbox.html'
        })
        .when('/inbox/:id', {
            controller: 'MainController',
            templateUrl: 'views/message.html'
        })
        .otherwise({
            redirectTo: '/main'
        });
});