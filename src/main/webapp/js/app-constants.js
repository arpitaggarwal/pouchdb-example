var myApp = angular.module("myapp",[]);

myApp.constant('RESOURCES', (function() {
  // Define your variable
  var resource = 'http://127.0.0.1:8008';
  // Use the variable in your constants
  return {
    USERS_DOMAIN: resource,
    USERS_API: resource + '/users',
    BASIC_INFO: resource + '/api/info'
  };
})());

//Reference : https://stackoverflow.com/questions/18494050/is-there-a-way-in-angularjs-to-define-constants-with-other-constants