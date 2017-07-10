var myapp = angular.module('myapp', ['PouchDbModule']);

myapp.controller('MainCtrl', function(PouchDbService, $log, $scope) {
	 
	  var db = PouchDbService.getDb();
	  
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



