const mongoose =require("mongoose")


mongoose.connect(process.env.DB).then(()=>{
    console.log("Db is connected successfully");
}).catch((error)=>{
    console.log(error);
})