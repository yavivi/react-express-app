const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://jacob123:HVG33kMxXTztMCy@cluster0.hboiu.mongodb.net/extick?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("conncted to atlas db"))
    .catch(error =>{ console.error('Connection error', error.message)})

    
const db = mongoose.connection
module.exports=db


