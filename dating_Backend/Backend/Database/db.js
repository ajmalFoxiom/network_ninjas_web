const mongoose =require("mongoose")
module.exports.connect=async()=>{
    try {
        console.log(process.env.DB_URL,"process.env.DB_URL")
        const uri=process.env.DB_URL
        mongoose.set('strictQuery',false)
        mongoose.connect(uri,{dbName:process.env.DB_NAME},
            {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
                console.log(`connected to DataBase ${process.env.DB_NAME}`)
            
            })
            .catch((error)=>{
                console.error("error in Connecting to DB",error)
            });
        
    } catch (error) {
        console.log('Database Connection error\n',error)
        return false;
    }
}