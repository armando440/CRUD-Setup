const MongoClient = require('mongodb').MongoClient;
const assert = require ('assert');
const { resolve } = require('path');
//Database object  setup
const url = process.env.DB_URL;
const db_name = process.env.DB_NAME; 
const col_name = process.env.COL_NAME;
//read all
const readCars = () => {
    const iou = new Promise ((resolve, reject)=>{
        MongoClient.connect(url, (err, client)=>{
            assert.equal(err, null);

            const db = client.db(db_name);
            const collection = db.collection(col_name);
                collection.find({}).toArray((err, docs) =>{
                assert.equal(err, null);
                resolve(docs);
                client.close();
                });
        });
    });
    return iou;
}
  module.exports ={
      readCars,}

