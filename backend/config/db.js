const mongoose =require("mongoose")
const url="mongodb+srv://abhis08062003:xpWKcuwfWS1AF7ku@cluster0.pbrfq6t.mongodb.net/mernstack?retryWrites=true&w=majority";
const connection=mongoose.connect(url).then(()=>{
    console.log("connection Succesfull");
}).catch((err)=>{
    console.log("failed");
});
module.exports={
    connection
}