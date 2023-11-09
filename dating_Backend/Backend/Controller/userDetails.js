
const Details =require("../Models/userDetails")


module.exports.createDetails = async(req)=>{
    try {
        const data= await new Details(req.body).save()
        if(data){
            return{data,message:"Sucess"}
        }
        
    } catch (error) {
        return{message:"error in adding Details",code:400}
        
    }
}