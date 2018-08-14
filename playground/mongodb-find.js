// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error){
    return console.log('Unable to connect to MongoDB server!!!');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b72e0e4855add3604d8219a')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to fetch todos', error);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (error) => {
  //   console.log('Unable to fetch todos', error);
  // });

  db.collection('Users').find({name: 'Vedran'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch todos', error);
  });

  db.collection('Users').find({name: 'Vedran'}).count().then((count) => {
    console.log(`Users count: ${count}`);
  }, (error) => {
    console.log('Unable to fetch todos', error);
  });

   // client.close();
});
