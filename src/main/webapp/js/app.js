

/*var pouchDB = new PouchDB('my_database');
console.log(pouchDB);*/

var db = new PouchDB('dbname');

db.put({
  _id: 'dave@gmail.com',
  name: 'David',
  age: 69
});

db.changes().on('change', function() {
  console.log('Ch-Ch-Changes');
});


//Database information
db.info(function(err, info) {
   if (err) {
      return console.log(err);
   } else {
      console.log(info);
   }
});

//Reading the contents of a Document
db.get('dave@gmail.com', function(err, doc) {
   if (err) {
      return console.log(err);
   } else {
      console.log(doc);
   }
});
