var PouchDbService = angular.module('PouchDbService', ['pouchdb']);

PouchDbService.service('Database', function (pouchDB) {
    this.getDb = function() {
		var _db = pouchDB('dbname');
		return _db;
	};
});
