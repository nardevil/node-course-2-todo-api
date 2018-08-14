// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error){
    return console.log('Unable to connect to MongoDB server!!!');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

// deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

//Users
//deleteMany
// db.collection('Users').deleteMany({name: 'Vedran'}).then((result) => {
//   console.log(result);
// });

// findOneAndDelete
db.collection('Users').findOneAndDelete({_id: new ObjectID('5b72e4bc325ac33b2c9ae983')}).then((result) => {
  console.log(result);
});

   // client.close();
});
