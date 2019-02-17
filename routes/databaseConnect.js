const MongoDb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

var database;

exports.setUserData = function(obj){
    MongoClient.connect(url , function(err, db) {
        if(err) {
            return console.dir(err); 
        }
    database = db.db('test');
    // database.collection('test').insertOne({"test" : "something"});
    database.collection('test').insertOne(obj);
    
})};

// function recently changed need to check data
exports.getUserData = function(email, callback){
    MongoClient.connect(url , function(err, db) {
        if(err) {
            return console.dir(err); 
        }
    database = db.db('test');
    var query = {email : email}; // replace with email
    database.collection('test').find(query).toArray(function(err, result) {
        if (err) return console.dir(err)
        else if(result.length > 0){
            //console.log("result.length : " + result.length  );
            callback(null, result);
        }
        else{
            console.log("empty database");
            callback(null, null);
        }
        console.log(result);
        db.close();
        return result;
    });
    
    
})};

exports.setProjectData = function(projectInfo){
    MongoClient.connect(url , function(err, db) {
        if(err) {
            return console.dir(err); 
        }
    database = db.db('project');
    database.collection('projects').insertOne(projectInfo);
})};



exports.getProjectData = function(id, callback){
    MongoClient.connect(url , function(err, db) {
        if(err) {
            return console.dir(err); 
        }
    var query = id;
    database = db.db('project');
    database.collection('projects').find(query).toArray(function(err, result) {
        if (err) return console.dir(err);
        else if (result.length > 0){
            //console.log("length:"+result.length);
            callback(null, result);
        }
        else {
            console.log("Empty database!!!");
            callback(null, null);
        }
        db.close(); 
    });
})};

exports.getProjectDetails = function(query, callback){
  MongoClient.connect(url , function(err, db) {
        if(err) {
            return console.dir(err); 
        }
    
    database = db.db('project');
    database.collection('projects').find({}).toArray(function(err, result) {
        if (err) return console.dir(err);
        else if (result.length > 0){
            //console.log("length:"+result.length);
            callback(null, result);
        }
        else {
            //console.log("Empty database!!!");
            callback(null, null);
        }
         
    });
    db.close();
})}; 

// exports.test = function(){
    
//     MongoClient.connect(url , function(err, db) {
//     if(err) {
//         return console.dir(err); 
//     }
//   database = db.db('test');
//   database.collection('test').insertOne({"test" : "something"});
   
// })};


// exports.build = function(){
//     MongoClient.connect(url, function(err, db){
//         if (err){
//             console.error(err);
//             return;
//         }
//         database  = db;
//         var collection = db.collection("test");
//         console.log("Established connection to the database");

        
//     })
// }

// exports.addData = function(){
//      database.collection('test', function(err, collection) {});
// }

// exports.addContact = function(contact){
//     database.collection('test').insertOne({
//         email : "bmulmi@ramapo.edu",
//         languages : ["c++", "java", "html"],
//         filename : "jpt.txt"
//     }, function(err, result){
//         console.log('ID returned: '+ result.insertedId);
//     });
// }

// exports.displayContacts = function(query, callback){
//     database.collection('contacts').find().toArray(function(err, result){
//         var dataset = [];
//         if(err){
//             console.log(err);
//             callback(err, null);
//         } else if (result.length > 0){
//             console.log("returned result length: " + result.length);
//             for (each of result){
//                 //console.log('pushing');
//                 dataset.push(each);
//             }
//             callback(null, dataset);
//         } else {
//             console.log("Empty Database!");
//             callback(null, null);
//         }
//     });
// }

// exports.updateContact = function (contact, callback){
//     console.log(contact);

//     database.collection('contacts').updateOne({"_id" : ObjectID(contact.id)}, {
//         $set : {
//             FirstName: contact['firstname'],
//             LastName: contact['lastname'],
//             Prefix: contact['prefix'],
//             Street: contact['street'],
//             City: contact['city'],
//             State: contact['state'],
//             Zip: contact['zip'],
//             Phone: contact['phone'],
//             Email: contact['email'],
//             ContactbyMail: contact['contactbymail'],
//             ContactbyEmail: contact['contactbyemail'],
//             ContactbyPhone: contact['contactbyphone'],
//             Longitude: contact['longitude'],
//             Latitude: contact['latitude']
//         }
//     }, function(err, result){
//         callback(err, result);
//     });
// }

// exports.deleteContact = function(contact, callback){
//     database.collection('test').deleteOne({"_id": ObjectID(contact)}, 
//         function (err, result) {
//             //console.log("in d b" + result);
//             callback(err,result);
//         }
//     )
// }