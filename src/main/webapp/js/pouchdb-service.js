var PouchDbModule = angular.module('PouchDbModule', [ 'pouchdb' ]);

PouchDbModule.service('PouchDbService', function(pouchDB, RESOURCES) {
	this.getDb = function() {
		var _db = pouchDB('dbname');
		console.log(RESOURCES.USERS_DOMAIN);
		return _db;
	};
});
