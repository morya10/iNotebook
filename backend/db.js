const mongoose =  require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/iNoteBook"


const connectToMongo = () =>{
    mongoose.connect(mongoURI)
    .then(()=>{
        console.log("mongodb connected");
    })
    .catch(()=>{
        console.log('failed');
    })
}

module.exports = connectToMongo;