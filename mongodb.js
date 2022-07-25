// CRUD operation

// const mongodb = require ('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const {MongoClient, ObjectID, ObjectId} = require('mongodb') // object destructering

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length);

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
    //         Description :'Breakfast completed' ,
    //         completed : true
    //     },
    //     {
    //         Description:'Lunch completed' ,
    //         completed: false
    //     },
    //     {
    //         Description:'Dinner Completed',
    //         completed : true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert taks');
    //     }

    //     console.log(result);
    // })

    // db.collection('users').findOne({name : 'Amit'}, (error, user) =>{
    //     if (error){
    //         return console.log(error);
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find({age : 26}).toArray((error, users) =>{
    //     console.log(users);
    // })

    // db.collection('tasks').findOne({_id : new ObjectID("62dec9307b6c769ec1d039be")}, (error, user) =>{
    //         if (error){
    //             return console.log(error);
    //         }
    //         console.log(user);
    //     })
    
    
    // db.collection('tasks').find({completed : false}).toArray((error, users) =>{
    //     console.log(users);
    // })

    // db.collection('users').updateOne({_id : new ObjectId('62dc281b99fa6694f0c1403c')}, 
    //     {
    //     //     $set : {
    //     //         name : 'Amit Kumar'
    //     // }
    //      $inc: { age: 5 } 
    // }).then((result) =>{
    //     console.log(result);
    // }).catch((error) =>{
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({}, {
    //     $set : {
    //         completed : true
    //     }
    // }).then((result) =>{
    //         console.log(result);
    //     }).catch((error) =>{
    //         console.log(error);
    //     })

    // db.collection('users').deleteMany({
    //     name : 'Amit'
    // }).then((result) =>{
    //     console.log(result);
    // }).catch((error) =>{
    //     console.log(error);
    // })

    db.collection('tasks').deleteOne({
        Description : 'Lunch completed'
    }).then((result) =>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
})