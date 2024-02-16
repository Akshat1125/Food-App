const mongoose = require('mongoose');
require('dotenv').config();
// mongoose.set('strictQuery', true);
const MongoDataBase = async()=>{
await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true},(err,rst)=>{
    if(err)console.log("mongo error",err)
    else {
console.log("mongo connected")
   const fetch_data =  mongoose.connection.db.collection("food_items");
   fetch_data.find({}).toArray(async function(err,data){

    const foodCategory=mongoose.connection.db.collection("foodCategory");
    foodCategory.find({}).toArray(async function(err,catData){
        if(err)console.log(err);
        else {
            global.food_items = data;
            global.foodCategory = catData;

        }

    })
    // if(err)console.log(err);
    // else {
    //     global.food_items = data;
    //     console.log(global.food_items)
    // }
   })
}
});
}
module.exports = MongoDataBase;