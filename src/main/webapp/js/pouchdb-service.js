var PouchDbModule = angular.module('PouchDbModule', ['pouchdb']);

PouchDbModule.service('PouchDbService', function (pouchDB) {
    this.getDb = function() {
		var _db = pouchDB('dbname');
		return _db;
	};
});
