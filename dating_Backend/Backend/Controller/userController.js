const User = require("../Models/User")


module.exports.createUser =async(req,res)=>{
   try {
    console.log(req.body)
    const data =await new  User(req.body).save()
    if(data){
        return {data, message:'success'}
    }}catch(err){

        return{message:"error in creating User",code:400}
    }
}

module.exports.loginUser = async (req, res) => {
    const { username,password } = req.body;

    try {
        const user = await User.findOne({ username});
        console.log(user, "user.................");
        if (!user) {
            return{ message: "User not found" , code:403};
        }

        if (user.password !== password) {
            return { message: "Incorrect password or Username", code:403 };
        } 
        
        else {
            return {message:"success", code:200};
        }
    } catch (error) {
        console.error(error);
        return{message:'something went wrong', code:500}
    }
}

// module.exports.listUser = async (req, res) => {
//     console.log("working");
//     try {
//         const data = await User.find({});
//         console.log(data, "dataaaa");
//         if (data.length > 0) {
//             res.status(200).json({ message: "users are listed", data });
//         } else {
//             res.status(404).json({ message: "no users found" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: "server error", error });
//     }
// };



// module.exports.listUserUnder = async (req) => {
//     const passenger_id = req.params.passenger_id;
//     try {
//       const status = await Status.find({ passenger_id }).populate('passenger_id');
//       if (status.length > 0) {
//         return { message: 'listed', code: 200, data: status };
//       } else {
//         return { message: 'not listed', code: 404 };
//       }
//     } catch (error) {
//       console.error(error);
//       return { message: 'error', code: 500 };
//     }
//   };
module.exports.listUser= async(req)=>{
    const data =await User.find()
        if(data){
            return{message:" Listed",data}

        }
        return{message:"not listed"}
    
}
module.exports.getUserData = async (req, res) => {
    if (req.session.user) {
        const user = req.session.user;
        return res.status(200).json({ user });
    } else {
        return res.status(401).json({ message: "User not authenticated", code: 401 });
    }
};
module.exports.listUserMatch= async (req, res)=>{
    const data =await User.find()
    this.getUserData;
    if (User) {
        const looking_for = User.looking_for;
        const list= data.filter(el=>el.you_are === looking_for);
        console.log('list',list)
            if(list){
                return res.status(200).json({ list })

            }
            else{
                return res.status(401).json({ message: "User not authenticated", code: 401 });
            }
        return{message:"not listed"}
    
    }
};
