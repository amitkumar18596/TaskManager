// CRUD operation

// const mongodb = require ('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const {MongoClient, ObjectID} = require('mongodb') // object destructing

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length);

MongoClient.connect(connectionURL, { useNewURLParser : true}, (error, client)=>{
    if (error){
        return console.log('unable to connect to database');
    }

    console.log('Database connected successfully');

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name : 'Amit',
    //     age : 26
    // }, (error, result)=>{
    //     if (error){
    //         return console.log('unable to insert user');
    //     }

    //     console.log(result);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name : 'Lipu',
    //         age : 26
    //     },
    //     {
    //         name : 'Amulya',
    //         age : 57
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('unable to insert documents');
    //     }

    //     console.log(result);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         'Breakfast completed' : true
    //     },
    //     {
    //         'Lunch completed' : false
    //     },
    //     {
    //         'Dinner Completed' : true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert taks');
    //     }

    //     console.log(result);
    // })
})