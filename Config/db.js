require('dotenv').config();

const mongoose=require('mongoose');
function connectDB(){
    mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, UseUnifiedTopology:true});

    mongoose.connection.once('open',()=>{
        console.log('Database Connected');})
}
module.exports = connectDB;