var myapp = angular.module('myapp', ['PouchDbService']);

myapp.controller('MainCtrl', function(Database, $log, $scope) {
	 
	  var db = Database.getDb();
	  
	  var doc = { name: 'Arpit Aggarwal' };

	  function error(err) {
	    $log.error(err);
	  }

	  function get(res) {
	    if (!res.ok) {
	      return error(res);
	    }
	    return db.get(res.id);
	  }

	  function bind(res) {
	    $scope.doc = res;
	  }

	  db.post(doc)
	    .then(get)
	    .then(bind)
	    .catch(error);
	 
});



