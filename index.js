var MongoClient=require('mongodb').MongoClient;
var URl="mongodb+srv://jauadulkarim:foregivememylord@cluster0.sqtcuzy.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(URl,function (error,MyMongoClient) {
    if(error){
        console.log("connection fail")
    }
    else{
        console.log("connection Successful");
        //insertData(MyMongoClient);
        UpdateMyData(MyMongoClient);
    }
})
function insertData(MyMongoClient){
    var MyDataBase=MyMongoClient.db("ostad");
    var MyCollection=MyDataBase.collection("students");
    var MyData={Name:"Fahim",Phn:"019454550**",Group:"C"};
    MyCollection.insertOne(MyData,function (error) {
        if(error){
            console.log("data insert Fail");
        }
        else{
            console.log("data insert successful");
        }
        
    })

}
function UpdateMyData(MyMongoClient){
    var MyDataBase=MyMongoClient.db("ostad");
    var MyCollection=MyDataBase.collection("Students");

    var myquery={Group:"C"};
    var MyNewValues={$set:{Phn:"012333"}};
    MyCollection.updateOne(myquery,MyNewValues,function(error,result) {
        console.log(result);

    })

}