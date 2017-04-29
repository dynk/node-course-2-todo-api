// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').find({
    //     _id: new ObjectID("5904a164b3e83e292452d198")
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err)
    // });

    db.collection('Users').find({name: "Raphael Salvador"}).count().then((count)=>{
        console.log('Todos count: ' + count);
    }, (err)=>{
        console.log('Unable to fetch todos', err)
    });

    // db.close();
});